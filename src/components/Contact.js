import React from 'react';
import "./Contact.css";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
    <div className="contact-container">
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" name="username" placeholder="Username" required/>
          <i class='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" name="username" placeholder="Password" required/>
          <i class='bx bxs-lock-alt'></i>
        </div>

        <div className="remember-forget">
          <label><input type="checkbox"/> Remember me</label>
          <Link to="#">Forget Password?</Link>
        </div>
        <button type='submit' className='btn'> Submit </button>
        <div className="register-link">
          <p>Don't have an account? <Link to="#">Register</Link></p>
        </div>
      </form>
    </div>
  </div>
    </>
  );
}

export default Contact;
