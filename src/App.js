import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'
import youssef from './8.jpg'
import Profilephoto from '../src/Component/Profile/ProfilePhoto'
import FullName from '../src/Component/Profile/FullName'
import Address from '../src/Component/Profile/Address'
import Test from '../src/Component/Profile/Test'
import { propTypes } from 'react-bootstrap/esm/Image';
import Data from '../src/Profile/ProfileComponent/ProfileComponent'


/*function App() {
  return (
    <>
    <div className="App">


     <div className="panel-header panel-header-sm">
</div>

        <div className="card-header">
          <h5 className="title">Formulaire</h5>
        </div>
        <div className="card-body">
          
          <form>

          <div class="form-group">
        <label for="firstname">First Name :</label>
        <input type="text"  />
       
        </div>
  
    
   <div class="form-group">
        <label for="LastName">LastName :</label>
        <input type="text"  />
       
        </div>

    
        <div class="form-group">
        <label for="Username">Username :</label>
        <input type="text"  />
       
        </div> 
     <button type="button" class="btn btn-primary" id="btn"> Envoyer</button>

     <button type="button" class="btn btn-secondary" id="btn"> Return</button>
            </form>
    
  </div>
</div>

       
   </>         
   
  );
}*/

/*function App(){
  let input = (<input type='text' placeholder='Name'/>);
  let button = <button>Submit</button>;
  let form = (
    <form>
      <Profilephoto/>
      {input}
      {button}
    </form>
  );
  
  return form;
  }*/


/*function App() {
  // We can put functions inside other functions when they are related
  function createForm() {
    let input = <input type="text" placeholder="Name" />;
    let button = <button>Submit</button>;
    return (
      <form>
        {input}
        {button}
      </form>
    );
  }
  return <div>{createForm()}</div>;
 }*/

/*function djo(){
 return (
 
   [1, 2, 3].map(currentValue => (
          <div>{currentValue}</div>
   ))
 
   );
}

 function App() {
   let firstName = "Will";
   let lastName = "Smith";
   
 return (
  <div>
    
    {djo()}
     <img src={youssef} className="my-profile" alt='Will Smith'/>
     <p>
      {firstName} {lastName}
    </p>
  </div>
);
}*/



/*function App() {
 
  
return (
<>


<div style={{border:'solid 1px black',maxwidth:'100vw'}}/>
<div style={{textAlign:'center'}}/>
 <h1 className="title red" style={{textAlign:'center', color:'red'}}>Youssef Ayari</h1>


 <img src="/4.jpg" style={{height:'100px'}} className="photo"/>


 <img src={youssef} className="photo"/>


<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>



</>
);
}




/*const firstName = prompt("type your first name");

 function App() {
   return (
     <div>
       <p> Hello {firstName || "Anonymous"} </p>
       <p> It looks like you {firstName ? "have" : "don’t have"} a name</p>
       {!firstName && (
         <form>
           <p> Type your name here </p>
           <input type="text" />
         </form>
       )}
     </div>
   );
 }*/



/*function App(){

 return (
   <div>
    <Profilephoto/>
    <FullName   name="Youssef ya halouf"   age="26"/>
    
    <Address/>
    <Test/>
     <Data> <img src={youssef} className="photo"/></Data>
   </div>
 );

}*/



/*function App(){

 return (
   <div>
 
     <Data fullname="bilel dhawedi " profession="Ingenieur " bio=" 2073 "> <img src={youssef} className="photo"/>
    
     </Data>
     
   </div>
 );

}*/






class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

      Person: {
        fullName: '',
        bio: '',
        imgSrc: '',
        profession: '',

      },
      show: false,
      time:0

    }
  }


  componentDidMount() {


    const interval = setInterval(() => {
      this.setState({
        time:this.state.time+1
      })
    
    }, 1000);
    

  }

  Toggle () {
    

    this.setState({

      show: !this.state.show,

    })

     if(this.state.show==true){
        
      
      this.setState({
      
          Person:{
            fullName: 'Youssef Ayari',
            bio: 'Informatique',
            imgSrc:  <img src={youssef} className="photo"/>,
            profession: 'Etudiant',

          }
         

    })

     }

   // this.state.show = ! this.state.show

  

  
    console.log(this.state.show)
  }




  render() {
    console.log(this.state.time)
    return (
      <>

    <br></br>  
  <button type="submit"   onClick={() => this.Toggle()} className="btn btn-primary" >Boutton</button>
    
    <table>

      <tr>
      
        <td>{this.state.Person.fullName} </td>
        
        </tr>  


        <tr>
     
      <td>{this.state.Person.bio} </td>
      
      </tr>  

      <tr>
      
      <td>{this.state.Person.imgSrc} </td>
      
      </tr>  

      <tr>
      
      <td>{this.state.Person.profession} </td>
      
      </tr>  
  
    </table>
      </>
    );

  }
}





export default App;
