import react from "react"
import { Link } from "react-router-dom";
import './App.css';
import teacher from './imagesimport/teachers.png'


export default function Sidemenu(){
return(<>
<div class="side-menu">
        <div class="brand-name">100 acres</div>
        <div style={{padding:'20px' ,fontSize:'20px',marginBottom:'5px'}}>
          <Link to='management'style={{paddingBottom:'20px'}} ><img src={teacher}></img>Management </Link>
          <br />
         
       </div>
       <hr />
          <div style={{padding:'20px' ,fontSize:'20px',marginBottom:'10px'}}>
          <Link to='settings'><img src={teacher}></img>Setting </Link>
        

        </div>
</div>
     
      </>
    );
}