import {useParams} from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development";

function Detail(){
    const {id}= useParams()
    const [detail,setDetail] = useState({})
    useEffect(()=>{
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(x=>x.json())
        .then(x=>setDetail(x.data.movie))
    },[id])
    console.log(detail)
    return (
        <div>
            <h1>{detail.title}</h1>
            <h2>{detail.year}</h2>
        </div>
    )
}

export default Detail;