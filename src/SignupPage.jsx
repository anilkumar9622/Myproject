import React from 'react';
import {Link, useNavigate } from 'react-router-dom';

export default function SignupPage() {
  
 const [userName,setUserName] = React.useState('');
 const [pass,setPassword] = React.useState('')
 const navi = useNavigate()
 const handleSubmit = (e) => {
    e.preventDefault();
   const userList = localStorage.getItem('userList') || [];
   const userListParsed = typeof userList == 'string' ? JSON.parse(userList) : userList;
   const newUser={
     userName,pass
   }
   userListParsed.push(newUser);

   localStorage.setItem('userList', JSON.stringify(userListParsed))
   
 navi('/login');
}


  return <div style={{display:'grid',backgroundColor:'#ebccb7', height:'100vh'}}>
      <fieldset style={{justifyContent:'center',placeSelf:'center',borderRadius:'10px',  border:'2px solid blue',height:'500px',width:'500px',display:'flex',backgroundColor:'burlywood'}}>
        
          <legend style={{color:'#3E8E7E',fontSize:'30px'}}><strong>100 acers</strong></legend>
      <div style={{justifyContent:'center',placeSelf:'center'}}> 
          <label htmlFor="fname"> <strong>Name:</strong> </label> <br />
          <input type="text" style={{width:'350px',height:'35px',borderRadius:'3px solid green'}} value={userName} onChange={(e)=>setUserName(e.target.value)}
          id="fname" name="firstname" placeholder="Your name.."/>
          <br />
          <br />
          <br />
          <label htmlFor="pwd"><strong>Password:</strong></label> <br />
          <input type="password" value={pass} style={{width:'300px',height:'30px',borderRadius:'3px solid green'}} onChange={(e)=>setPassword(e.target.value)} id="pwd" name="password" placeholder="Password"/>
          <br />
          <br />
          <br />
          <label htmlFor="num"><strong>Mobile No.:</strong></label> <br />
          <input type="tel" id="mob" name="number" style={{width:'300px',height:'30px',borderRadius:'3px solid green'}} placeholder="Enter Your Mobile No."/>
          <br />
          <br />
          <br />
          <label htmlFor="country"><strong>Country:</strong>:</label><br />
          <select id="country" name="country">
            <option value="India">India</option>
            <option value="australia">Australia</option>
            <option value="">Canada</option>
            <option value="usa">USA</option>
          </select>
          <br />
          <br />
          <br />
          <input type="checkbox"/><span>Allow Notification</span>
        <br />
        <br />
          <input type="submit" value="Sign up" style={{width:'100px',height:'30px',backgroundColor:'ivory'}} onClick={handleSubmit}/>
          </div>
          
        </fieldset>
  </div>;
}
