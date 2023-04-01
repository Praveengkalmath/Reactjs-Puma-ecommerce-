import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/adminlogin.css'

const Adminlogin = () => {
    let [email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let navigate=useNavigate()

    let login=(e)=>{
        e.preventDefault();
        let data={email,password} //data from i/p

        //admin validation
        if (email=='praveen@gmail.com' && password=="praveen") {
            navigate('/adminportal/')
        } else {
            alert('invalid credentials')
        }

    }
    return (
        <div className="adminLogin">
        <div className="formcontainercard">
            <h1>Login as Admin</h1>
            <div className="form_input">
                <form action="" onSubmit={login}>
                   <div className="email">
                   <label htmlFor=""> Enter Email Address : <input type="email" required placeholder="Email address" className="" 
                    value={email} onChange={(e)=>setEmail(e.target.value)}/></label><br />
                    
                   </div>
                   <div className="password">
                    <label htmlFor="">Enter Password : <input type="password" required placeholder="Enter password" 
                    value={password} onChange={(e)=>setPassword(e.target.value)}/></label><br />
                    
                   </div>
                    <button className="btnbtn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
      );
}
 
export default Adminlogin;