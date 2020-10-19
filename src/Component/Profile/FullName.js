
import React from "react";

/*const FullName = (props) => {

  console.log(props)
  
 return (
   <>
  <h1 style={{color:'green'}}>{props.children} {props.name}{props.age}</h1>
   </>
 );
};*/

const FullName = () => {
  const handleClick = e => {
    e.preventDefault();
    console.log("The link was clicked.");
  };
 
  return (
    <a href="/" onClick={handleClick}>
      Click me
    </a>

  );
 };
export default FullName;

