import React from 'react'
import{ Link, useNavigate } from 'react-router-dom'
import searchimage from './imagesimport/search.png'
import notification from './imagesimport/notification.jpg'
import profile from './imagesimport/profile.png'


export default function Header(props) {
    let name = props.name
    const navi1 = useNavigate();
    const logginout = ()=>{
        navi1('');
    }


    return (<>
       

        <div style={{display:'flex' }}>
            <div>
            <img src={notification} height='60px' width='45px' />
            </div>
              <div> 
                  <img src={profile} height='60px' width='45px' />
                  </div>
            <div className='position right[]'>
                <div>
                <button onClick={logginout}>Logout</button>
            {/* <a href="/" class="btn">LOGOUT</a> */}
                <div style={{color:'white'}}>{name}</div>
                </div>
             <Link to="/"  > Logout</Link>
            </div>

       </div>
 



 {/* <div class="container">
            <div class="header">
                <div class="nav">
                    <div class="search">

                        <input type="text" placeholder='search..'></input>
                        <button type="text"><img src={searchimage}></img></button>
                    </div>
                    <div class="user">
                        <a href="/" class="btn">LOGOUT</a>
                        {/* <a href="/signup" class="signup">SIGN UP</a> */}
                        {/* <img src={notification}></img>
                        <div class="img-case">
                            <img src={profile}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'burlywood' ,width:'100%',height:'100vh'}}>

            </div> */} 

        {/* </div> */}
    </>)
}
