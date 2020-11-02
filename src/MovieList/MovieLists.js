import React from "react";
import film from "../film.jpg";

 const MovieList= [
   
        
    {
        title: "Noura tehlem",
        description: "Le plus visiter en 2020",
        posterUrl: <a href="https://www.nouratehlem.com">https://www.nourtehlem.com</a>,
        rate: 5,
        
        Trailer: <iframe width="300" height="200" src="https://www.youtube.com/embed/3nh5WhTRsls" 
        frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
 
        </iframe>,
        photo:film
      },
     
      {
        title: "Batman",
        description: "Meilleur film en 2020 en Netflix",
        posterUrl: <a href="https://www.Batman.com">https://www.Batman.com</a>,
        rate: 6,
        Trailer: <iframe width="300" height="200" src="https://www.youtube.com/embed/HsWlgInAdu0" 
        frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
 
        </iframe>,

      photo: film
      },

      {

        title: "Dachra",
        description: "Le plus regarder selon le site primevideo",
        posterUrl: <a href="https://www.dachra.com">https://www.dachra.com</a>,
        rate:4,
        Trailer:<iframe width="300" height="200" src="https://www.youtube.com/embed/a5_WTF7KtYQ"
         frameborder="0" allow="accelerometer; autoplay;
          clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

          </iframe>,
 
        photo:film
      },
      {
        title: "Spiderman",
        description: "J'ai pas aimer ce film",
        posterUrl:<a  href="https://www.Spiderman.com">https://www.Spiderman.com</a>,
        rate: 4.5,
        Trailer: <iframe width="300" height="200" src="https://www.youtube.com/embed/FguIk-SEkWI" 
        frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
 
        </iframe>,

        photo:film
      }
   
];
    
export default MovieList
