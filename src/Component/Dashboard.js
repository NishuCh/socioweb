import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const Dashboard = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    loadUsers();
  },
    []
  )
  const loadUsers = async () => {
    const result = await axios.get("https://acesoftech.co.in/API/blog_api/view.php");
    setStudent(result.data.records);
    //  console.log(result.data);
  }

  return (
    <div>
        <Navbar/>
      <Sidebar/>
      <Footer/>
      <div className='dash-head'>
        <h2>Your Posts!</h2>
   
        <div className='container'>
        {student?.map((students, index) => (
            <div className='row'>
                <div className='img'>
                
                    <div className='info'>
                   
                    <span className='tittle'>{(students.post_tittle)}</span>
                    <p>{(students.post_des).substring(0,201)}</p>
                   <button className='read-btn'>
                   <Link to={`/Readmore/${students.id}`}>Read more</Link>
                    </button>
                  
                    </div>
                   
                </div>
              
                
                </div>
                 ))}
                </div>
                 
      </div>
    </div>
  )
}

export default Dashboard
