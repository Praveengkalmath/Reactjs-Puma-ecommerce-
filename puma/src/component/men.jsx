import { useState,useEffect } from "react";
import {useNavigate,useLocation} from "react-router-dom"

import '../Style/men.css'
const Men = () => {
    let location=useLocation()//fetching route value
    let [puma,setPuma]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:2002/puma')
            let data=await response.json()
            setPuma(data)
        }
        fetchData()
    },[puma])

    //Delete from server
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:2002/puma/${id}`,{
         method:'DELETE'
        })
        alert(`${title} will be deleted permanently`)
    }
    let navigate=useNavigate()
    let read=(id)=>{
    if(location.pathname == '/adminportal/men'){
        navigate(`/adminportal/men/${id}`)
    }
    else
    {
       navigate(`/userportal/men/${id}`)
    }
}
    return ( 
        <div className="pumalist">
        <h1> END OF SALE SEASON SALE - MEN'S COLLECTION </h1>
        <h2>MEN's : {puma.length} Products</h2>

        <div className="pumasection">
            {puma.map((data)=>(
               <div className="card">
               <div className="pumaCard_img"> 
            
               <button className="images1" onClick={()=>read(data.id)}> <img height={250} width={250} src={data.image} alt="" /> </button>
               {/* <img height={250} width={250} src={data.image} alt="" /> */}
               </div>
                <div className="pumaCard_detail" style={{display:"flex"}}>
                <h4 style={{color:"black"}}>{data.name}</h4> 
                <h6>₹{data.cost}</h6>
                </div>
                <strike className='scratch' ><h6>₹{data.scratch}</h6></strike> <br />
                <div className="btnbtn1">
                <button style={{backgroundColor:"darkblue"}} onClick={()=>read(data.id)}>similarproducts</button>
                 {location.pathname == '/adminportal/men' && <button onClick={()=>handleDelete(data.id)}>Delete</button> }
                </div>
                </div>
            ))}
        </div>
    </div>
     );
}
 
export default Men;