import { useState,useEffect } from "react";
import '../Style/userinfo.css'

const UserInfo = () => {
    let [users,setUsers]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:2002/users')
            let data=await response.json()
            setUsers(data)
        }
        fetchData()
    },[])
    
    let handleDelete=(id,name)=>{
        setUsers(users.filter(x=>x.id!=id))
        alert(`${name} has been deleted`)
    }
    return (  
        <div className="bookList1">
            <h1>User's List</h1>
            <div className="book_section1">
            {users.map((data)=>(
                   <div className="bookCard1">
                    <h4 style={{color:"darkblue"}}>Name: {data.name}</h4> 
                    <h6>Age: {data.age}</h6>
                    <h6>Email: {data.email}</h6>
                    <h6>Phno:{data.phonenumber}</h6>
                    <div className="btn5">
                    <button onClick={()=>{handleDelete(data.id,data.name)}}>Delete</button>
                    </div>
                   </div> 
                ))}

            </div>
        </div>
    );
}
 
export default UserInfo;