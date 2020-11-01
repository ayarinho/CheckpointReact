
import React from "react";
import { Redirect,Link } from "react-router-dom";


const MoviesDescription = ({match,data}) => {


  const goHome=()=>{

    return (<Redirect to={{pathname: '/', state: '/Movie'}} />)
  }



    var movie= data.find(p => p.title == match.params.MovieTitle);
  
    console.log(data)
    console.log(match.params.MovieTitle)
  
    
    var MovieData;

  
    if(movie){

    console.log(movie)
    MovieData = <div>
  
        <h3>{movie.description}</h3>
        <img src={movie.photo} className="photo"/>

        <div> 
          
          <br></br>


   
       <div className="nav-item">

         <Link to="/" onClick={()=>goHome()} className="nav-link">Return</Link>

        </div>

        </div>

   </div>;
  
    }
    else
    MovieData ="";

    
  
    return (
      <div>
        <div>
           {MovieData}
        </div>
      </div>
    )    
  }
  
  export default MoviesDescription