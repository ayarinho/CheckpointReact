import React, { useState } from "react";



const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
    }
  };
  
 const Login = props => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  
    const login = () => {
      fakeAuth.authenticate(() => setRedirectToReferrer(true));
    };
  
    // const { from } = props.location|| { from: { pathname: "/" } };
  
    // if (redirectToReferrer) {
    //   return <Redirect to={from} />;
    // }
    console.log('pop',props)
    return (

      <div>
        {/* <p>You must log in to view the page at {from.pathname}</p> */}
        <button onClick={login}>Log in</button>
      </div>
    );
  };

  export default Login;
  
