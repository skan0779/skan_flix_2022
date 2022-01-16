import {useState,useEffect} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
  // console.log(movie);

  return (
    <div className={styles.main}>
      {load?<h1>Loading...</h1>:
        <div className={styles.main__box}>
          <div className={styles.title}>
            <h1>Movie Rate 9.0</h1>
          </div>
          <div className={styles.movie}>
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
        </div>
      }
    </div>
  )
}

export default Home;
