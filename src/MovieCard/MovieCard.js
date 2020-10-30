import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";

const MovieCard =({profile})=>{

    const {title, description, posterUrl, rate,photo}=profile;


    return (
 <>

<div className="card">
    
      <div className="rowContainer ">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h2></h2>
        <a href={posterUrl} >{posterUrl}</a>
        <h3>{rate}</h3>
        <img src={photo} className="photo"/>
        
      </div>
    </div>


 </>

    );


    
} 

MovieCard.propTypes = {
    posterUrl: PropTypes.any,
 
   };

 export default MovieCard;

 