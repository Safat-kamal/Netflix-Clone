import React, { useEffect, useState } from 'react';
import axios from './Axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org/t/p/original";
const Rows = ({title,url,isPoster}) => {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(url);
            setMovies(request.data.results)
            return request;
        } 
        if (!Object.keys(movies).length) {
          fetchData();
        }
    },[url,movies])

    const handleClick = (movie)=>{
        if(trailerUrl){
          setTrailerUrl("");
        }
        else{
          movieTrailer(movie?.name  || "")
          .then((url)=>{
            const urlParams = new URLSearchParams(new URL(url).search);
            // https://www.youtube.com/watch?v=IN5TD4VRcSM/
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error)=>{
            // console.log(error);
          });
        }
    }
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
  return (
    <div className='items_container'>
        <h2>{title}</h2>
        <div className='items'>
          {movies.map((movie)=>{
              return <img className={`item ${isPoster && "item-poster"}`} key={movie.id} src={`${baseUrl}${isPoster?movie.poster_path:movie.backdrop_path}`} alt={movie.name} onClick={()=>handleClick(movie)}/>
          })}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Rows