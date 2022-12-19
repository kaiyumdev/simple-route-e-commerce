import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth);
  // console.
  console.log(error, user)
  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };
  if(user?.user?.uid){
    return<Navigate to="/shop"/>
  }


  const createNewUser = (e) =>{
    e.preventDefault();
    if(password !== confirmPassword){
      // setError('Please enter a valid password');
        return;
    }
    if(password.length < 6){
      // setError('password must be at least 6 characters');
      return;
    }
    createUserWithEmailAndPassword(email, password)
  }

  return (
    <div>
      <h1 className="text">SignUp Please</h1>
      <div className="form-container">
        <form onSubmit={createNewUser}>
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              placeholder="Email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              placeholder="password"
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="confirm-password"
              name="confirm-password"
              id=""
              placeholder="password"
            />
          </div>
          <input className="btn-submit" type="submit" value="SignUp" />
          <p>{error}</p>
          <p>
            Already have an account{" "}
            <Link className="btn-link" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
