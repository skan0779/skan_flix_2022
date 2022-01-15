import {useState,useEffect} from "react";
import Movie from "../components/Movie";

function Home() {
  const [load,setLoad] = useState(true);
  const [movie,setMovie] = useState([]);
  useEffect(()=>{
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    .then(x=>x.json())
    .then(x=>{
      setMovie(x.data.movies);
      setLoad(false);
    });
  },[]);

  return (
    <div>
      {load?<h1>Loading...</h1>:
        <div>
          {movie.map((x)=>
            <Movie 
              key={x.id}
              id={x.id}
              img={x.medium_cover_image} 
              title={x.title} 
              summary={x.summary} 
              genres={x.genres}
            />)}
        </div>
      }
    </div>
  )
}

export default Home;
