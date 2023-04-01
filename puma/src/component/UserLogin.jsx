import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../Style/userlogin.css'

const UserLogin = () => {
    let [name, setName] = useState('')
    let [age, setAge] = useState('')
    let [email, setMail] = useState('')
    let [phonenumber, setPhonenumber] = useState('')
    let navigate = useNavigate()

    
    let login = (e) => {
        e.preventDefault()

        let data = { name, age, email, phonenumber }
        fetch('http://localhost:2002/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert('logged in sucessfully..!')
        navigate('/userportal')
    }
    let reset = () => {
        setName("")
        setAge("")
        setMail("")
        setPhonenumber("")
    }
    return ( 
        <div className="userLogin">
        <div className="formcontainercard2">
            <h1>Login as User</h1>
            <div className="form_input1">
                <form action="" onSubmit={login}>
                UserName: <input type="text"  placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                         {/* Age : <input type="text" placeholder="enter the age" value={age} onChange={(e) => setAge(e.target.value)} /> <br /> */}
                        Email: <input type="email" required placeholder="enter the mail" value={email} onChange={(e) => setMail(e.target.value)} /> <br />
                        PhNo: <input type="tel" placeholder="enter the phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} /> <br />

                        <button type='submit'>Login</button>
                        <button type='reset' onClick={reset} >Reset</button>
                </form>
            </div>
        </div>
    </div>
     );
}
 
export default UserLogin;