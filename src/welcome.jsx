import React from 'react';
import { Link } from 'react-router-dom';

import teacher from './imagesimport/teachers.png'
import photo from'./imagesimport/image5.jpg';
import "./welcome.css";
export default function Welcome() {
    const headDesign = {
        backgroundColor: '#7f878f', display: 'flex',
        justifyContent: 'end',
        gap:'15px',
        padding:'20px 20px 20px 0',
    }
    const sideMenu={
        position :'absolute',
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        backgroundColor:'burlywood',
        height:'90vh',
        width:'300px',
        padding:'40px 40px 40px 40px',
    }
    const left={
        justifyContent:'center'
    }
    return (<>
               
    
        <div style={headDesign}>
            
           <strong style={left}>Welcome</strong>
            <Link to='/signup'>
                Signup
            </Link >
            <br />
            <Link to='/login'>
                Signin
            </Link>
         
        </div>
        
        <div className="photo" style={{backgroundImage: `url(${photo})`,}}>
            
       </div>
       
       {/* <p><img src="/imagesimport/image4.jpg" alt="image4" width="1500px" height="1500px"> 

       </p> */}
        
        {/* <div style={sideMenu}>
            <span style={{fontSize:'40px',color:'blue',paddingLeft:'35px',paddingBottom:'30px'}}>blueChip</span>
        <span ><img src={teacher}></img>Services</span>
           
            <hr />
            <span><img src={teacher}></img>Comment</span>
            <hr />
            <span><img src={teacher}></img>Table</span>
            <hr />
            <span><img src={teacher}></img>UI Comment</span>
            <button value='PrimeMembership' style={{backgroundColor:'skyblue',marginTop:'25px',fontSize:'20px',border:'1px solid green'}}>Prime Membership <br/>Rs.499</button>
        </div> */}
    </>

    );
}