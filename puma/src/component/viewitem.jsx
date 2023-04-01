import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import '../Style/viewitems.css'

const Viewitems = () => {
let[pumawomen,setPumawomen]=useState([])

//to get route parameter
let params=useParams()

useEffect(()=>{
    let fetchData=async()=>{
        let response=await fetch(`http://localhost:2002/pumawomen/${params.id}`)
        let data= await response.json()
        setPumawomen(data)
    }
    fetchData()
},[])
let buy=()=>{
    alert('Product added to cart')

}

    return (
        <div className="itemss">
            <div className="contentt">
                <h1>REPUBLIC DAY SALE </h1><br />
                <p>FLAT 50% OFF</p>
        {/* <h2>{pumawomen.name}</h2> */}
        </div>
        <div className="pumainfo">
            <div className="img">
            <h1 style={{color:"black" }}>{pumawomen.name}</h1> 
        <img height={450} width={750} src={pumawomen.image} alt="" />
        </div>
            <div className="side">
            <h1 style={{color:"black"}}>{pumawomen.name}</h1> 
                <h2>₹{pumawomen.cost}</h2>
            <strike className='scratch' ><h3>₹{pumawomen.scratch}</h3></strike> <br />
            <h4>extra 5% off with SBI debitcard</h4>
            <button className="buy"onClick={buy} >Buy</button>
            </div>
            
        </div>
        
        </div>
    );
}
export default Viewitems;