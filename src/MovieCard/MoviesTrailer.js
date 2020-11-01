
import React, { useState,useEffect } from "react";

const MoviesTrailer = ({match,data}) => {


 
    var movie1= data.find(p => p.rate == match.params.MovieTitles);
  
    console.log(movie1)
    console.log(match.params.MovieTitles)
  
    
    var MovieData1;
  
    if(movie1){
    console.log(movie1)
    MovieData1 = <div>
       <h2>{movie1.posterUrl}</h2>
 
          </div>;
  
    }
    else
    MovieData1 = "";
  
    return (
      <div>
        <div>
           {MovieData1}
        </div>
      </div>
    )    
  }
  
  export default MoviesTrailer
