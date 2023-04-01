import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddMen = () => {
    let [image,setImage]=useState("")
    let [name,setName]=useState("")
    let [cost,setCost]=useState("")
    let [scratch,setScratch]=useState("")
    // let [shortDescription,setshortDescription]=useState("")
    // let [longDescription,setlongDescription]=useState("")
    // let [thumnailUrl,setthumnailUrl]=useState("")

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();
        //data to be posted
        let puma={image,name,cost,scratch}

        // posting to the server
        fetch(`http://localhost:2002/puma`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(puma)
        })
        alert('product added successfully')
        navigate('/adminportal/men')
    }

    return ( 
        <div className="all">
        <div className="addBook">
        <h1>Add Mens Product</h1>
        <div className="form1">
            <form action="" className="form" onSubmit={handleSubmit}>
              
                   Image url:<input type="text" value={image} onChange={(e)=>setImage(e.target.value)} required placeholder="add Image url" /> <br />

                
              
                  Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Add name of product" /> <br />
                
                
                  Cost:<input type="text" value={cost} onChange={(e)=>setCost(e.target.value)} required placeholder="add price" /> <br />
               
                
                Scratch cost:<input type="number" value={scratch} onChange={(e)=>setScratch(e.target.value)} required placeholder="add scratch price" /> <br />
               
               
                 {/* Shortdesc:   <textarea name="" value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)}  type="text" id="" cols="20" rows="1" placeholder="Short Descriptin"></textarea> <br />
               
               
                   Longdesc: <textarea name="" value={longDescription} onChange={(e)=>setlongDescription(e.target.value)} type="text" id="" cols="20" rows="1" placeholder="Long Descriptin"></textarea> <br />
              
              
                  Thumbnailurl:  <input type="text" value={thumnailUrl} onChange={(e)=>setthumnailUrl(e.target.value)} placeholder="thumnailUrl" /> <br /> */}
             
                <button >Add Product</button>
            </form>
        </div>
    </div>
    </div>
     );
}
 
export default AddMen;