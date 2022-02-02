import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import photo from'./imagesimport/image6.jpg';
import "./welcome.css"
export default function LoginPage() {
  
    const [username, setUserName] = React.useState();
    const [pwd, setPwd] = React.useState();

    const navi1= useNavigate();

    const onSubmitLogin = (e) => { 
        e.preventDefault();
        let userList = localStorage.getItem("userList");
        let verifyUser = JSON.parse(userList);
      
        console.log(userList);
        console.log(verifyUser);
        for(let i=0 ;i<verifyUser.length;i++){
          if(verifyUser[i].userName===username && verifyUser[i].pass === pwd){
            navi1("/dash", {state:verifyUser[i], replace:true} );
            return
          }
        }
        alert('invalid user')
      }

        // if(userName === ) {
        //    navi1('/Dashboard');
        // }
        
        // else{
        //    alert('Invalid User')
        // }
    //   }
    //    let count = 0
    //     const [myText,setMyText] = useState("OK");
    //     const handleTextChange = () => {
    //       setMyText('Working'+count);
    //       count ++ ;
    //   }

    //  useEffect(() => {
    //      fetch('https://jsonplaceholder.typeicode.com/albums/1/photos')
    //      .then((result) => result.json())
    //      .then((finalData) => { console.log("000000", finalData);})
    //    }, []);

      
       
 

  
    return ( <>
      
      {/* <div className="photo" style={{backgroundImage: `url(${photo})`,}}>
      </div> */}


    <div style={{display:'grid',backgroundColor:'#655D8A', backgroundImage: `url(${photo})`, height:'100vh'}}>
      
      <form className='form' style={{placeSelf:'center',padding:'30px',width:'450px',height:'300px',border:'2px',borderRadius:'25px'}} onSubmit={onSubmitLogin}>
      <legend style={{color:'#064635',fontSize:'30px', placeSelf:'Center',padding:'10px'}}><strong className='text-center'>Welcome</strong></legend>
         
         
         
          
          <div>
          <label htmlFor="name">Name:</label><br />

            <input  id="name"  value={username} onChange={(e)=>setUserName(e.target.value)} placeholder='Enter Name...' 
            style={{width:'400px',height:'30px',borderRadius:'5px'}}/>
          </div>
          <br />
        <div>
          <label htmlFor="password">Password:</label> <br />
            <input id="password" type='password' value={pwd} onChange={(e)=>setPwd(e.target.value)} placeholder='Enter Password...' 
            style={{width:'400px',height:'30px',borderRadius:'5px'}}/>
        </div>
        <div>
       
        <input type='submit' value='Login' style={{marginTop:'20px',width:'100px',height:'25px',backgroundColor:'#3864ab'}} />
        </div>
      </form>
      {/* <div>
           This is my Text : { myText }
           <button onClick={handleTextChange} className="w-25 btn btn-primary">Change Text</button>
         </div> */}

    </div>

    </>
    )
}