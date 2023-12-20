import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";



const Signup = (props) => {
    const [credentials, setCredentials] = useState({
        name: "", email: "", password: "", cpassword:""});
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
       const   { name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
         
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,email,password
        }),
      });
      const json = await response.json();
      console.log(json);
      
        //save auth token and redirect
        if (json.success) {
            localStorage.setItem("token", json.authtoken);
          navigate("/");
          props.showAlert("created your account successfully","success")
        }
        else {
            alert("invalid credentials","danger")
        }
    };
     const onChange = (e) => {
       setCredentials({ ...credentials, [e.target.name]: e.target.value });
     };
  return (
    <div className='container mt-2'>
      <h2 className='my-3'>Create an account to use inotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            onChange={onChange}
            aria-describedby='emailhelp'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            onChange={onChange}
            aria-describedby='emailhelp'
          />
          <div id='emailhelp' className='form-text'>
            We'll never share your email with anyone
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              onChange={onChange}
              minLength='5'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='cpassword' className='form-label'>
              confirm password
            </label>
            <input
              type='text'
              className='form-control'
              id='cpassword'
              name='cpassword'
              onChange={onChange}
              minLength='5'
              required
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}



export default Signup
