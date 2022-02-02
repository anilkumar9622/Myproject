import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidemenu from './sidemenu';
import Header from './header';
// import './App.css';
import './dashboard.css';
import EmpCardView from './common/empCardView';
// import SignupPage from './SignupPage';
// import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  
  const [dataList, setDataList] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=> res.json())
    .then((result)=> setDataList(result));
  },[]);


  const location = useLocation();
  const [name, setName] = useState([]);
  useEffect(() => {
    let name = location.state;
    setName(name)
    // console.log("location", location.state);
  },[]);
  
  

  return (<>
   {/* <Header />
   <div style={{display:'flex'}}>
  <div>
    <Sidemenu />
   </div>    
  <div style={{paddingTop:'50px',backgroundColor:"silver" ,width:'100%'}}>
    <Outlet/></div>
</div> */}

<div className="container">
  <div className="dash-header"> <Header /> </div>
  
  <div className="sidemenu">
    <div className="footer"></div>
  </div>
  <div className="center-container">
     {
       dataList.splice(0, 50).map((v,i)=> <EmpCardView key={i} data={v}/> )
     }
  </div>
</div>
  </>
  );
}

