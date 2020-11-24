import React,{useState} from 'react'
import MovieCard from './MovieCard';
import ReactStars from "react-rating-stars-component";
import {Form} from 'react-bootstrap'

const MovieList =(props)=>{
    const [titre,setTitre]=useState('')
    const [rate,setRate]=useState(0)
    const handleSearch=(e)=>{
        e.preventDefault();
        setTitre(e.target.value)
       
    }
    const handleRate=(r)=>{
        setRate(r)
    }
    
    return(
        <div>
        <Form>
            <Form.Group > 
                <Form.Control type="text" placeholder="movie name" onChange={e=>handleSearch(e)} />
            </Form.Group>
        </Form>
        <ReactStars
                count={5}
                onChange={handleRate}
                size={24}
                activeColor="#ffd700"
        />

        <div style={{display:"flex"}}>
        {props.Movies.filter(el=>el.titre.toUpperCase().includes(titre.toUpperCase())).filter(el=>el.rate>=rate).map((el,index)=><div key={index}> <MovieCard  titre={el.titre} rate={el.rate} img={el.img} /> </div>)}
        </div>
        </div>
    )
}

export default MovieList;