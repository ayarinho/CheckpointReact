

import React, {  Component, useState } from "react";
import MovieList from "../MovieList/MovieLists";
import MovieCard from "../MovieCard/MovieCard"

export default function FilterMovie() {
    

    const [Movie,setProfile] = useState({  title:"", description:"", posterUrl:"", rate:"",photo:""})
    const [isShow, setIsShow] = useState(false);
  
    const handleChange = (e) => {
        const { name, value } = e.target;
     
        setProfile({ ...Movie, [name]: value }); // iziid l'objet b 3 points
    
        console.log(e.target.value)
    
      
      
        console.log(Movie)


    
      };

      const handleChange1 = ( ) => {

        setIsShow(!isShow);
       
        /*MovieList.map((e,i) => {
          
          if(e.title===Movie.title){
        
          console.log(e.title)
          console.log(Movie.title);
         
          return (<MovieCard  key={i} profile={e}/>); 
         
          }
        
        
        }
        )*/
      };

    
  return (
    <>
  

      <div className="profiles-button-container">

      <form className="form-group">

      <div className="form-row"  style={{width:600, padding: "20px" }}>

            <input onChange={handleChange}  value={Movie.rate} name="rate"  className="form-control"/>
            <button type="button" className="btn btn-primary" onClick={handleChange1}> Filter Rate </button>

            <input onChange={handleChange}  value={Movie.title} name="title"  className="form-control"/>
            <button type="button" className="btn btn-primary" onClick={handleChange1}> Filter Title </button>
</div>
 

        { isShow &&(

  
console.log(isShow),

MovieList.map((e,i) => {
        

  if(e.title==Movie.title ||e.rate==Movie.rate){

  console.log(e.title)
  console.log(Movie.title);
 
  return (<MovieCard  key={i} profile={e}/>); 
 
  }


}
)
  )
}


</form>
</div>


</>
  );

}
