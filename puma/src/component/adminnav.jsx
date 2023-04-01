import { Link } from "react-router-dom";
import '../Style/adminnav.css'
const AdminNav = () => {
    return ( 
        <div className="adminnav">
              <div className="adminnavbar">
                <div className="adminnavtop">
                    <h1>EXTRA 5% INSTANT DISCOUNT FOR ALL ONLINEPAYMENTS.FREE DELIVARY.FREE RETURNS</h1>
                </div>
                <div className="adminsection">
                   
              <div className="adminnav_links">
              <div className="adminimage">
                        <img height={80} width={150} src="https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover-958x575.png" alt="" />
                    </div>
                    <ul>
                        <li><Link to="/adminportal/women"className="adminLink">Women</Link></li>
                        <li><Link to="/adminportal/addwomen"className="adminLink">Add Women</Link></li>
                        <li><Link to="/adminportal/men" className="adminLink">Men</Link></li>
                        <li><Link to="/adminportal/addmen" className="adminLink">Add Men</Link></li>
                        <li><Link to="/adminportal/kid"className="adminLink">Kids</Link></li>
                        <li><Link to="/adminportal/addkid"className="adminLink">AddKids</Link></li>     
                        <li><Link to="/adminportal/spcl"className="adminLink">Spcl-Adition</Link></li>
                        <li><Link to="/adminportal/addspcl"className="adminLink">Add-SpclAddition</Link></li>
                        <li><Link to="/adminportal/userinfo"className="adminLink">Userinfo</Link></li>
                        <li><Link to='/'className="adminLink">Logout</Link></li>
                    </ul>
                </div>
                <div className="admininput">
                <div className="adminicon">
                        <img height={20} src="data:image/png;base64,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" alt="" />
                    </div>
                    <input type="search"  placeholder="SEARCH PUMA.COM" />
                </div>
                       <img src="" alt="" />
                </div>
        </div>
        </div>
     );
}
 
export default AdminNav;


