
import React from "react";
import PropTypes from "prop-types";

const GetData =(props) => {

const Styles={ color:"red"};

    const handleName  = e => {
        e.preventDefault();

      alert(props.fullname)
      };
     
      
    return  (
        <>
<div>
    <span>{props.fullname}</span>
    <span>{props.bio}</span>
    <span>{props.profession}</span>
</div>


 <div style={Styles}> 
  
    <h1>C'est Moi   {props.children}</h1>

</div> 

    <h1>Voila {props.name} </h1>    
   
   
   
    <a href="/" onClick={handleName }>   UserProfile  </a>


    </>
      );
   }



   GetData.defaultProps = {
    name: "Brahim"
   };


   
    GetData.propTypes = {
    anyProp: PropTypes.any,
    booleanProp: PropTypes.bool,
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func
   };
   console.log(GetData.propTypes)



   export default GetData; 
