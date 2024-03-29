import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { API } from './global';

export default function EditMovie() {
    const {id}=useParams();
    // console.log(id);
    const [movie,setMovie]=useState([]);
    const [show,setShow]=useState(false);

    useEffect(()=>{
        fetch(`${API}/getone/${id}`,{   //https://65f16b78034bdbecc762700b.mockapi.io/Movies/${id}
            method:"GET"
        })
        .then((data)=>data.json())
        .then((mvs)=>setMovie(mvs))
        .then(()=>setShow(true))
    },[]);

    // console.log(movie);
  return (
    <div>
      {show ? <EditForm movie={movie}/>:"Loading..."}
    </div>
  )
}


function EditForm({ movie }) {
    console.log(movie);

    const movieValidationSchema = yup.object({
        name: yup.string().required(),
        poster: yup.string().required().min(10).url(),
        trailer: yup.string().required().min(10).url(),
        rating: yup.number().required('Rating should be done in number').min(0).max(10),
        summary: yup.string().required().min(20),
    });

    const formik = useFormik({
        initialValues: {
            name: movie.name,
            poster: movie.poster,
            trailer: movie.trailer,
            rating: movie.rating,
            summary: movie.summary
        },

        validationSchema: movieValidationSchema,

        onSubmit: (updatedMovie) => {
            editMovie(updatedMovie);
        },
    });

    const navigate=useNavigate();
    const editMovie = (updatedMovie) => {
        fetch(`${API}/update/${movie._id}`,{ //https://65f16b78034bdbecc762700b.mockapi.io/Movies/${movie.id}
            method:"PUT",
            body:JSON.stringify(updatedMovie),
            headers:{"Content-Type":"application/json"},
        }).then(()=> navigate("/portal/movielist"))
    }

    return (
        <form className='form' style={{ top: '55%' }} onSubmit={formik.handleSubmit}>
            <h1>Edit Movie</h1>
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
            />
            <TextField
                id="outlined-basic"
                label="Poster"
                variant="outlined"
                value={formik.values.poster}
                onChange={formik.handleChange}
                name="poster"
                onBlur={formik.handleBlur}
                error={formik.touched.poster && formik.errors.poster}
                helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}
            />
            <TextField
                id="outlined-basic"
                label="Trailer"
                variant="outlined"
                value={formik.values.trailer}
                onChange={formik.handleChange}
                name="trailer"
                onBlur={formik.handleBlur}
                error={formik.touched.trailer && formik.errors.trailer}
                helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null}
            />
            <TextField
                id="outlined-basic"
                label="Rating"
                variant="outlined"
                value={formik.values.rating}
                onChange={formik.handleChange}
                name="rating"
                onBlur={formik.handleBlur}
                error={formik.touched.rating && formik.errors.rating}
                helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}
            />
            <TextField
                id="outlined-basic"
                label="Summary"
                variant="outlined"
                value={formik.values.summary}
                onChange={formik.handleChange}
                name="summary"
                onBlur={formik.handleBlur}
                error={formik.touched.summary && formik.errors.summary}
                helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}
            />

            <Button
                className="button"
                variant="outlined"
                type="submit">Update</Button>
        </form>
    );
}


// function EditForm({movie}){

//     console.log(movie);

//     const movieValidationSchema = yup.object({
//         name:yup.string().required(),
//         poster:yup.string().required().min(10).url(),
//         trailer:yup.string().required().min(10).url(),
//         rating:yup.number().required('Rating should be done in number').min(0).max(10),
//         summary:yup.string().required().min(20),
//     })

//     const formik = useFormik({
//         initialValues:{
//             name:movie.name,
//             poster:movie.poster,
//             trailer:movie.trailer,
//             rating:movie.rating,
//             summary:movie.summary,
//         },

//         validationSchema: movieValidationSchema,

//         onSubmit:(values) => {
//             console.log(values)
//         },
//     });


//     return(
//         <form className='form' style={{top:'55%'}} onSubmit={formik.handleSubmit}>
//         <h1>Edit Movie</h1>
//         <TextField 
//         id="outlined-basic" 
//         label="Name" 
//         variant="outlined" 
//         values={formik.values.name} 
//         onChange={formik.handleChange} 
//         name="name"
//         onBlur={formik.handleBlur}
//         error={formik.touched.name && formik.errors.name}
//         helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
//         />
//         <TextField 
//         id="outlined-basic" 
//         label="Poster" 
//         variant="outlined" 
//         values={formik.values.poster} 
//         onChange={formik.handleChange} 
//         name="poster"
//         onBlur={formik.handleBlur}
//         error={formik.touched.poster && formik.errors.poster}
//         helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}
//         />
//         <TextField 
//         id="outlined-basic" 
//         label="Trailer" 
//         variant="outlined" 
//         values={formik.values.trailer} 
//         onChange={formik.handleChange} 
//         name="trailer"
//         onBlur={formik.handleBlur}
//         error={formik.touched.trailer && formik.errors.trailer}
//         helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null}
//         />
//         <TextField 
//         id="outlined-basic" 
//         label="Rating" 
//         variant="outlined" 
//         values={formik.values.rating} 
//         onChange={formik.handleChange} 
//         name="rating"
//         onBlur={formik.handleBlur}
//         error={formik.touched.rating && formik.errors.rating}
//         helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}
//         />
//         <TextField 
//         id="outlined-basic" 
//         label="Summary" 
//         variant="outlined" 
//         values={formik.values.summary} 
//         onChange={formik.handleChange} 
//         name="summary"
//         onBlur={formik.handleBlur}
//         error={formik.touched.summary && formik.errors.summary}
//         helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}
//         />

//         <Button 
//         className="button"
//         variant="outlined" 
//         type="submit">Update</Button>
//     </form>
//     )
// }