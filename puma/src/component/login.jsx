import { Link } from "react-router-dom";
import '../Style/login.css'
const Login = () => {
    return (
        <div className="landingpage">
            <div className="selectLogin1">
                <div className="selectionlogin">
                    <div className="login">
                        <img height={80} width={150} src="https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover-958x575.png" alt="" />
                    </div>
                </div>
                <div className="line">
                    <h1>LET's ENTER</h1>
                    <h1>THE NEW</h1>
                    <h1>PUMA WORLD....!</h1>
                </div>
                <div className="btns">
                <div className="land_user">
                    <button><Link to='/userlogin' className="btn2">User login</Link></button>
                </div>
                <div className="land_admin">
                    <button><Link to='/adminlogin' className="btn1">Admin login</Link></button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Login;