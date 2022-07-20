import React, { useEffect, useState } from 'react';
import axios from './Axios';
import request from '../requests';
import './Banner.css';
const Banner = () => {
    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const Request = await axios.get(request.fetchNetflixOriginals);
            setMovie(Request.data.results[Math.floor(Math.random() * Request.data.results.length)]);
            return Request;
        }
        fetchData();
    },[])

    function truncate(str,n){
        return str && str.length > n ? str.substr(0, n-1) + "..." : str;  

    }
  return (
    <header className='banner' style={
        {
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
        }
    }>  
        <div className='banner_contents'>
            <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='banner-buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>{truncate(movie.overview?movie.overview:null,150)}</h1>
        </div>
        <div className='backdrop-container'></div>
    </header>
  )
}

export default Banner
