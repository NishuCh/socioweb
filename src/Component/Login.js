import React from 'react'
import './Login.css';
import conimg from '../contact1.png';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
    let navigate = useNavigate();
    const [student, setStudent] = useState({
        email: "",
        password: ""

    })
    const {
        email,
        password
    } = student
    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const submitForm = async (e) => {
        e.preventDefault();
        axios.post('https://acesoftech.co.in/API/blog_api/login.php', student)
            .then((result) => {
                // console.log(result.status);
                if (result.data.Status == "200") {
                   window.localStorage.setItem('email', result.data.email);
                   window.localStorage.setItem('userName', (result.data.first_name+ ' ' +result.data.last_name));
                    navigate('/dashboard');
                } else {
                    alert('Invalid User Name')
                }
            })
    }
  return (
    <div>
<div className='login'>
    <div className='log-head'>
        <h2>Hey Welcome Back Please Login Here!</h2>
    </div>
    <div className='con-container'>
        <div className='con-content'>
          <img src={conimg} />
        </div>
        <form className='con-form1' onSubmit={submitForm}>
            <h2>Login Here!</h2>
        <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" name="email"  className='form-control' value={email} onChange={e => handleChange(e)} autoComplete="off"/>
                </div>
                <div className="form-group">
                <label for="pwd">Password:</label>
                    <input type="password" name="password" className="form-control" value={password} onChange={e => handleChange(e)} autoComplete="off" />
                </div>
                <div className="form-group">
                    <button className='log-btn'>Login</button><br/>
                 <button className='create-account'>
                 <Link to={`/Register`}>Don't have an account?</Link>
                    
                    </button>
                </div>
                
        </form>
        </div>
</div>
    </div>
  )
}

export default Login
