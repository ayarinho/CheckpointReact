import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
}

export default App;
