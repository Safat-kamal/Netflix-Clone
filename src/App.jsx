import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Rows from './components/Rows';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rows title="NETFLIX ORIGINALS" url={requests.fetchNetflixOriginals} isPoster={true}/>
      <Rows title="Trending Now" url={requests.fetchTrending}/>
      <Rows title="Top Rated" url={requests.fetchTopRated}/>
      <Rows title="Actions Movies" url={requests.fetchActionMovies}/>
      <Rows title="Comedy Movies" url={requests.fetchComedyMovies}/>
      <Rows title="Horror Movies" url={requests.fetchHorrorMovies}/>
      <Rows title="Romantic Movies" url={requests.fetchRomanticMovies}/>
      <Rows title="Documentaries" url={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
