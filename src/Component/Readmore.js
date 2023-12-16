import React from 'react'
import './Readmore.css';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
const Readmore = () => {
  const [student, setStudent]= useState({
    post_tittle:"",
    post_des:""
  })
    const { id } = useParams();
    useEffect(() => {
      loadUsers();
    },
      []
    )
    // const {post_tittle,post_des} = student;
    const loadUsers = async () => {
      const result = await axios.get("https://acesoftech.co.in/API/blog_api/singleblog.php?id="+id);
      setStudent(result.data);
       console.log(result.data);
    }
   
  return (
    <div>
        
      <div className='read-more'>
        <h2>{student.post_tittle}</h2>
        <p>{student.post_des}</p>
      </div>
       
    </div>
  )
}

export default Readmore
