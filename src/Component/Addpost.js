import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import './Addpost.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addpost = () => {
    let history = useNavigate();
    const [student, setStudent] = useState({
        post_tittle:"",
        post_des:""
    })
    const { 
        post_tittle,
        post_des
    } = student
    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }
    const submitForm = async (e) => {
        e.preventDefault();
        // console.log();
        await axios.post("https://acesoftech.co.in/API/blog_api/insert.php", student, { mode: 'cors' })
        .then((result) => {
            console.log(result);
            if (result.data.status == 'valid') {
                history(`/ViewPost`);
            } else {
                alert("There is problem in adding, please try again");
            }
        });
    }
  return (
    <div className='addpost'>
    <Navbar/>
    <Sidebar/>
    <Footer/>
    <div className='form'>
      <div className='form-heading'>
       <h2>Add Post Here!</h2> 
    </div>
    <form onSubmit={e => submitForm(e)}>
      <div className='row'>
        <div className='col'>
        <input className='form-control' type='text' name='post_tittle' placeholder=' Post Tittle' id="post_name" onChange={e => handleChange(e)}/>
        </div>
      </div>
      <div className='row'>

<div className='col'> 
{/* <input className='textarea' type='text' name='post_des' placeholder=' Post Discription' id="post_description" onChange={e => handleChange(e)}/> */}
<textarea name='post_des' className="textarea" placeholder='Post Description' id="post_description" onChange={e => handleChange(e)}></textarea>
    </div>
</div>
<div className='row'>
            <div className='sub-btn'><button type='submit' className='sub'>Submit</button></div>

          </div>
    </form>  
      
    </div>
    </div>
  )
}

export default Addpost
