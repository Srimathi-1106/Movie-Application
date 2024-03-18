import React, { useState } from 'react'
import Counter from './Counter'
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete'
import { API } from './global';


export default function Movie({ movieTake,getMovies }) {
    const [show,setShow]=useState(true);
    const navigate=useNavigate();

    const deleteMovie = (id) =>{
        fetch((`${API}/delete/${id}`),{  //https://65f16b78034bdbecc762700b.mockapi.io/Movies/${id}
            method:"DELETE"
        })
        .then(()=>getMovies())
        .then(()=>alert("This card gets deleted now!"))
    }

  return (
    <Card className='movie-container'>
        <img className='movie-poster' alt={movieTake.name} src={movieTake.poster}/>
        <CardContent className='card'>
            <div className='movie-spec'>
            <h2 className='movie-name'>{movieTake.name}
                <IconButton color="error" aria-label="Toggle-Description" onClick={()=>setShow(!show)}>
                    {show?<ExpandLessIcon fontSize="medium"/>:<ExpandMoreIcon fontSize="medium"/>}
                </IconButton>
                <IconButton color="error" aria-label="Movie-info" onClick={() => navigate(`/portal/view/${movieTake._id}`)}>
                    <InfoIcon  fontSize="small"/>
                </IconButton>
            </h2>
            <h3 className='movie-rating'>⭐{movieTake.rating}</h3>
            </div>
        </CardContent>                        
        {show?<p className='movie-summary'>{movieTake.summary}</p>:null}
        <CardActions>
            <Counter/>
            <IconButton sx={{marginLeft:"auto"}} aria-label="editMovie" onClick={()=>navigate(`/portal/edit/${movieTake._id}`)}>
                <EditIcon color="error"/>
            </IconButton>
            <IconButton sx={{marginLeft:"auto"}} aria-label="deleteMovie" onClick={()=>deleteMovie(movieTake._id)}>
                <DeleteIcon color="error"/>
            </IconButton>
        </CardActions>
    </Card>
  )
}
