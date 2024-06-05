// src/components/SignInSignUp.js
import React from 'react';
import './SignInSignUp.css';

const SignInSignUp = () => {
  const handleSignUpClick = () => {
    document.getElementById('container').classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    document.getElementById('container').classList.remove("right-panel-active");
  };

  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            
            
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1> Bon retour !</h1>
              <p> Pour rester en contact avec nous, veuillez vous connecter avec vos informations personnelles</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1> Excelia Group </h1>
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
              <p>"Entrez vos informations personnelles et profitez de nos services." </p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInSignUp;
