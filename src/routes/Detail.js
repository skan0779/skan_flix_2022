import { useCallback } from "react";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development";
import styles from "./Detail.module.css";

function Detail(){
    const {id}= useParams()
    const [load,setLoad]=useState(true);
    const [detail,setDetail]=useState({});
    const getDetail = useCallback( async()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        setDetail(json.data.movie);
        setLoad(false);
    },[id]);
    useEffect(()=>{
        getDetail();
    },[getDetail]); 
    
    // console.log(detail)
    return (
        <div className={styles.main}>
            {load?<h1>Loading...</h1>:
            <div>
                <h1>Movie Detail</h1>
                <hr/>
                <h1>Title: {detail.title}</h1>
                <h2>Year: {detail.year}</h2>
                <hr/>
                <h3>{detail.description_full}</h3>
                <hr/>
                <h4>Download: {detail.download_count}</h4>
                <h4>Rating: {detail.rating}</h4>
                <h4>Runtime: {detail.runtime}</h4>
                <h4>Language: {detail.language}</h4>
                <h4>Url: {detail.url}</h4>
            </div>
            }
        </div>
    )
}

export default Detail;