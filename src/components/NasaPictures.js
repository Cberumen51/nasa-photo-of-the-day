import React, {useState, useEffect} from "react";
import axios from "axios";
// import PictureInfo from "./PictureInfo";

export default function NasaPictures() {
    const [pictures, setPicture] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=CrsnI78WQatOUMY9c8ercInZdi1icvs0ifef2wx3`)
        .then(res => {
            console.log(res)
            setPicture(res.data)
        })
        .catch(err => {
            console.log("There data was not returned", err);
        })
    }, []);
    console.log(pictures);

    return (
    <div className="picture">
        <h1>{pictures.title}</h1>
        <h2>{pictures.copyright}</h2>
        <h2>{pictures.date}</h2>
        <img alt="NASA POTD" src={pictures.url}/>
        <p>{pictures.explanation}</p>
    </div>
    )
}
