import React from "react";
import MovieList from "../MovieList/MovieLists";
import { Link, Route} from "react-router-dom";
import MoviesDescription from "./MovieDescription";
import MoviesTrailer from "./MoviesTrailer";



export default function Movie({match}) {

  
  var descriptionList = MovieList.map((movie) =>
        (
            <li>
                <Link to={`${match.url}/${movie.title}`}  > {movie.title} </Link>
           
            </li>
        )

    )



    var TrailerList = MovieList.map((movie) =>
        (
            <li>
                <Link to={`${match.url}/${movie.rate}`}  > {movie.posterUrl} </Link>
           
            </li>
        )

    ) 
 

  return (

    <>

     <div>
    
          
  <form class="form-inline">
      
      <h3  > Description</h3>
    
    <nav className="navbar navbar-light"  style={{ color: 'red'}} > 
    
    {descriptionList} 


    </nav>
      
      </form>

   
                <div className="form-row"  style={{ border: "1px solid black", padding: "20px" }}>

            <Route path={`${match.url}/:MovieTitle`} render={(props) => <MoviesDescription data={MovieList} {...props}  />} />
           

            <Route exact path={match.url}

                render={() => (
                    <div>Please select a description</div>
                )}
            />
            </div>


        </div>



    
 <div>
    

 <form class="form-inline">
      
      <h3> Bonde Annonce</h3>
    
    <nav className="navbar navbar-light"  style={{ color: 'red'}}> {TrailerList} </nav>
      
  </form>



 <div className="form-row"  style={{ border: "1px solid black", padding: "20px" }}>


         <Route path={`${match.url}/:MovieTitles`} render={(props) => <MoviesTrailer data={MovieList} {...props}  />} />
        

         <Route exact path={match.url}

             render={() => (
                 <div>Please select a trailer link</div>
             )}
         />
</div>

     </div>



     </>
  );

}
