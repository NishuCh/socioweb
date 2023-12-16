import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const Editpost = () => {
    let history = useNavigate();
    const { id } = useParams();

    const [student, setStudent]= useState({
      post_tittle:"",
      post_des:""
    })

     useEffect(()=>{
        loadUsers();
      },[])
    const {post_tittle,post_des} = student;

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const updateForm = async (e)=>{
        e.preventDefault();

        console.log(student);

      await axios.post("https://acesoftech.co.in/API/blog_api/update.php",student)
      .then((result)=>{
          console.log(result);
        if(result.data.status=='valid'){
            history(`/Viewpost`);
          }
      else{
        alert('There is problem in adding,please try again');
      }
    });
}

const  loadUsers = async ()=>{

 // console.log('AA'+id)
 const result = await axios.get("https://acesoftech.co.in/API/blog_api/edit.php?id="+id); 
 setStudent(result.data);
 //console.log(result);
}


  return (
    <div className='addpost'>
    <Navbar/>
    <Sidebar/>
    <Footer/>
    <div className='form'>
      <div className='form-heading'>
       <h2>Edit Your Post Here!</h2> 
    </div>
    <form onSubmit={e => updateForm(e)}>
      <div className='row'>
        <div className='col'>
        <input className='form-control' type='text' name='post_tittle' placeholder=' Post Tittle' id="post_name" value={post_tittle}  onChange={e => handleChange(e)} />
        </div>
      </div>
      <div className='row'>

<div className='col'> <input className='textarea' type='text' name='post_des' placeholder=' Post Discription' id="post_description" value={post_des} onChange={e => handleChange(e)}/>
     
    </div>
</div>
<div className='row'>
            <div className='sub-btn'><button type='submit' className='sub'>Update</button></div>

          </div>
    </form>  
      
    </div>
    </div>
  )
}

export default Editpost
