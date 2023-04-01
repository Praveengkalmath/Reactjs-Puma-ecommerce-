import { useState,useEffect } from "react";
import {useNavigate,useLocation} from "react-router-dom"

const Spcl = () => {
    let location=useLocation()//fetching route value
    let [pumaspcl,setPumaspcl]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:2002/pumaspcl')
            let data=await response.json()
            setPumaspcl(data)
        }
        fetchData()
    },[pumaspcl])

    //Delete from server
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:2002/pumaspcl/${id}`,{
         method:'DELETE'
        })
        alert(`${title} will be deleted permanently`)
    }
    let navigate=useNavigate()
    let read=(id)=>{
    if(location.pathname =='/adminportal/spcl'){
        navigate(`/adminportal/spcl/${id}`)
    }
    else
    {
       navigate(`/userportal/spcl/${id}`) 
    }
}
    return ( 
        <div className="pumalist">
        <h1> END OF SALE SEASON SALE - SPECIAL EDITION COLLECTION </h1>
        <h2>SPECIAL EDITION's : {pumaspcl.length} Products</h2>
        <div className="pumasection">
            {pumaspcl.map((data)=>(
                  <div className="card">
                  <div className="pumaCard_img">
                  <button className="images1" onClick={()=>read(data.id)}> <img height={250} width={250} src={data.image} alt="" /> </button>
                  </div>
                   <div className="pumaCard_detail" style={{display:"flex"}}>
                   <h4 style={{color:"black"}}>{data.name}</h4> 
                   <h6>₹{data.cost}</h6>
                   </div>
                   <strike className='scratch' ><h6>₹{data.scratch}</h6></strike> <br />
                   <div className="btnbtn1">
                <button style={{backgroundColor:"darkblue"}} onClick={()=>read(data.id)}>similarproducts</button>
                 {location.pathname =='/adminportal/spcl' && <button onClick={()=>handleDelete(data.id)}>Delete</button> }
                </div>
                </div>
                
            ))}
        </div>
    </div>
     );
}
 
export default Spcl;