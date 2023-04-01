import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/addwomen.css'
const AddWomen = () => {
    let [image, setImage] = useState("")
    let [name, setName] = useState("")
    let [cost, setCost] = useState("")
    let [scratch, setScratch] = useState("")
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();
        //data to be posted
        let pumawomen = { image, name, cost, scratch }

        // posting to the server
        fetch(`http://localhost:2002/pumawomen`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pumawomen)
        })
        alert('product added successfully')
        navigate('/adminportal/women')
    }
    return (
        <div className="all">
           
        <div className="addBook">
            <h1>Add Womens Product</h1>
            <div className="form1">
                <form action="" className="form" onSubmit={handleSubmit}>

                    Image url:<input type="text" value={image} onChange={(e) => setImage(e.target.value)} required placeholder="add Image url" /> <br />



                    Name:<input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Add name of product" /> <br />


                    Cost:<input type="text" value={cost} onChange={(e) => setCost(e.target.value)} required placeholder="add price" /> <br />


                    Scratch cost:<input type="number" value={scratch} onChange={(e) => setScratch(e.target.value)} required placeholder="add scratch price" /> <br />

                    <button >Add Products</button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default AddWomen;