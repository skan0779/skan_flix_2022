import propTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id,img,title,summary,genres}){    
    return(
        <div className={styles.box}>
            <img src={img} alt={title}/>
            <h2><Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link></h2>
            <p>
                {summary.length>200?`${summary.slice(0,200)}...`:summary}
                {summary.length<3?`${title}'s summary has been deleted`:null}
            </p>
            <ul>{genres.map((g)=>(<li key={g}>{g}</li>))}</ul>
        </div>
    )
};

Movie.propTypes={
    id: propTypes.number.isRequired,
    img: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;

