import React, { useState,useEffect } from "react";
import film from "../film.jpg";

 const MovieList= [

    {
        title: "Noura tehlem",
        description: "Meilleur film en 2020 en Netflix",
        posterUrl: <a href="https://www.netflix.com">https://www.netflix.com</a>,
        rate: 5,
        photo:film
      },
     
      {
        title: "Batman",
        description: "Meilleur film en 2020 en Netflix",
        posterUrl: <a href="https://www.netflix.com">https://www.netflix.com</a>,
        rate: 5,
      photo: film
      },
      {
        title: "Dachra",
        description: "Meilleur film en 2020 en Netflix",
        posterUrl: <a href="https://www.netflix.com">https://www.netflix.com</a>,
        rate:4,
        photo:film
      },
      {
        title: "Fast And Furious",
        description: "Meilleur film en 2020 en Netflix",
        posterUrl:<a href="https://www.netflix.com">https://www.netflix.com</a>,
        rate: 5,
        photo:film
      },
];
    
export default MovieList
