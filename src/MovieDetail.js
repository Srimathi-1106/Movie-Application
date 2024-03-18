import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { API } from './global';

export default function MovieDetail() {
    const {id} =useParams();
    console.log(id);
    const [movie,setMovie]=useState([]);

    const navigate=useNavigate();

    useEffect(()=>{
        fetch(`${API}/getone/${id}`,{
          //https://65f16b78034bdbecc762700b.mockapi.io/Movies/${id}
            method:"GET"
        })
        .then((data)=>data.json())
        .then((mvs)=>setMovie(mvs))
    },[]);

    const ratingStyles = {
        color:movie.rating>=8.5?"green":"red",
    }
    console.log(movie);

  return (
    <div>
      <iframe 
      width="100%" 
      height="900px" 
      src={movie.trailer} 
      title={movie.title} 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
      </iframe>
      <div className='movie-container'>
        <div className='movie-spec'>
            <h2 style={{color:"brown"}} className="movie-name">{movie.name}</h2>
            <h3 className="movie-rating" style={ratingStyles}>⭐{movie.rating}</h3>
        </div>
        <p className='movie-summary'>{movie.summary}</p>
      </div>
      <Button style={{backgroundColor:"brown"}} variant="contained" startIcon={<ArrowBackIosIcon/>} onClick={()=>navigate(-1)}>Back</Button>
    </div>
  )
}
