import { useState,useEffect } from "react";
import {useNavigate,useLocation} from "react-router-dom"
import '../Style/women.css'
import { Link } from "react-router-dom";
const Women = () => {
    let location=useLocation()//fetching route value
    let [pumawomen,setPumawomen]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:2002/pumawomen')
            let data=await response.json()
            setPumawomen(data)
        }
        fetchData()
    },[pumawomen])

    //Delete from server
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:2002/pumawomen/${id}`,{
         method:'DELETE'
        })
        alert(`${title} will be deleted permanently`)
    }
    let navigate=useNavigate()
    let read=(id)=>{
    if(location.pathname == '/adminportal/women'){
        navigate(`/adminportal/women/${id}`)
    }
    else
    {
       navigate(`/userportal/women/${id}`)
    }
}
    return ( 
        <div className="pumalist">
      <h1> END OF SALE SEASON SALE - WOMEN'S COLLECTION </h1>
        <h2>WOMEN's : {pumawomen.length} Products</h2>
        <div className="pumasection">
            {pumawomen.map((data)=>(
               <div className="card">
               <div className="pumaCard_img"> 
               {/* <Link to='`/adminportal/women/${id}`' className="Link"><img height={250} width={250} src={data.image} alt="" /></Link> */}
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
                 {location.pathname == '/adminportal/women' && <button onClick={()=>handleDelete(data.id)}>Delete</button> }
                </div>
                 </div>
            ))}
        </div>
    </div>
     );
}
 
    
 
export default Women;