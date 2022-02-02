import React from 'react';



export default function EmpCardView(props) {

 const { title, url, thumbnailUrl } = props.data;

return <div style={{display:'flex', justifyContent:'space-evenly', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                     marginTop:'10px', backgroundColor:'#fff', padding:'15px', borderRadius:'5px'}}>
 <img src={url} width='120px' height='120px'  />  
  <span>{title} </span> 
 <img src={thumbnailUrl} width='120px' height='120px' />
</div>

}