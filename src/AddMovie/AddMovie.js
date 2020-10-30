

import React, { useState,useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import MovieList from "../MovieList/MovieLists";


export default function Movies() {

  const [MovieLists, setProfiles] = useState(MovieList);
  const [Movie, setProfile] = useState({title:"", description:"", posterUrl:"", rate:"",photo:""});


  const handleChange = (e) => {
    const { name, value } = e.target;
 
    setProfile({ ...Movie, [name]: value }); // iziid l'objet b 3 points

    console.log(e.target.value)

    console.log(Movie)

  };

  const handleSubmit = () => {
    setProfiles([...MovieLists, Movie]); // iziiid tableau b 3 points


  console.log(MovieLists)
  console.log(Movie)
 
    setProfile({title:"", description:"", posterUrl:"", rate:"",photo:""});


  

  };


  return (

    <div className="container">

     


        <div className="form-row"  style={{ border: "2px solid black", padding: "20px" }} >
          <form className="form-group">
           <center> <h2>Add Movies</h2></center>
            <label className="form-control-label">title</label>
            <input
              onChange={handleChange}
              value={Movie.title}
              name="title"
              className="form-control"
            />
            <label className="form-control-label">description</label>
            <input
              onChange={handleChange}
              value={Movie.description}
              name="description"
              className="form-control"
            />
            <label className="form-control-label">PosteUrl</label>
            <input
              onChange={handleChange}
              value={Movie.posterUrl}
              name="posterUrl"
              className="form-control"
            />

             <label className="form-control-label">rate</label>
            <input
              onChange={handleChange}
              value={Movie.rate}
              name="rate"
              className="form-control"
            />
            <label className="form-control-label">Photo</label>
            <input
              onChange={handleChange}
              value={Movie.photo}
              name="photo"
              className="form-control"
            />

            <br />


            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              AddMovie
            </button>
          </form>
        </div>
     
      


      

      <div className="profiles-container"  >

            {
  

  MovieLists.map((e,i)  =>(


            <MovieCard key={i} profile={e} />


            ))

}

  </div>

    </div>
  );
}
