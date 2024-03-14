import React from 'react';
import '../../App.css';


function SignUp() {
  return (
    <div className='form-modal__container'>
      <div className='form-modal__wrapper' >
        <div className='sign-up'>
          <img src='/images/beautiful-shot-mountains-cloudy-sky-from-inside-plane-windows.jpg' alt='Mountain pic shot'></img>
        </div>
        <div className='sign-up__container'>
          <h2>Sign Up</h2>
          <form className='sign-up__form'>
            <label>Email</label> <br></br>
            <input type='text' placeholder='xyz@gmail.com'></input><br></br>
            <label>Password</label> <br></br>
            <input type='password' placeholder='password'></input><br></br>
            <button type='submit' className='btn-sign'>Sign Up</button>
          </form>

          <div>
            <p className='have-account'>Have an account? <span>Log In here </span></p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignUp;