import React from 'react'
import './Register.css';
import conimg from '../contact1.png';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
const Register = () => {
    let history = useNavigate();
    const [data, setData]=useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })
    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});
        
    }
    const SubmitForm=(e)=>{
        e.preventDefault();
        const sendData ={
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password
        }
        // console.log(sendData);
        axios.post('https://acesoftech.co.in/API/blog_api/register.php', sendData)
      .then((result) => {
        // console.log(result.status);
        if (result.data.status == "Invalid") {
          // console.log(result.status);
          alert("Invalid User")
        } else {
          history('/dashboard')
        }
      })
    }
  return (
    <div>
<div className='login'>
    <div className='log-head'>
        <h2>Feel free to connect with us</h2>
    </div>
    <div className='con-container'>
        <div className='con-content'>
          <img src={conimg} />
        </div>
        <form className='con-form'  onSubmit={SubmitForm}>
            <h2>Register Here!</h2>
        <div className="form-group">
        <label for="email">First Name:</label>
                    <input type="text" name="first_name" onChange={handleChange} value={data.f_name} class="form-control" placeholder="Enter First Name" id="f_name" />
                </div>
                <div className="form-group">
                <label for="pwd">Last Name:</label>
                    <input type="text" name="last_name" onChange={handleChange} value={data.l_name} class="form-control" placeholder="Enter Last Name" id="l_name" />
                </div>
                <div className="form-group">
                <label for="email">Email:</label>
                    <input type="email" name="email" onChange={handleChange} value={data.email} class="form-control" placeholder="Enter Email" id="email" />
                </div>
                <div className="form-group">
                <label for="email">Password:</label>
                    <input type="password" name="password" onChange={handleChange} value={data.password} class="form-control" placeholder="Enter Password" id="email" />
                </div>
                <div className="form-group">
                    <button className='log-btn'>Register</button><br/>
                 <button className='create-account'>
                 <Link to={`/Login`}>Already have an account?</Link>
                    
                    </button>
                </div>
                
        </form>
        </div>
</div>
    </div>
  )
}

export default Register
