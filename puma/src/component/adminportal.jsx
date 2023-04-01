import { Routes,Route } from "react-router-dom";
import Pagenot from "./404";
import AddKid from "./addkid";
import AddMen from "./addmen";
import AddSpcl from "./addspcl";
import AddWomen from "./addwomen";
import AdminBanner from "./adminbanner";
import AdminNav from "./adminnav";
import Footer from "./footer";
import Kid from "./kid";
import Men from "./men";
import Spcl from "./spcl";
import UserInfo from "./userinfo";
import Viewitems from "./viewitem";
import Viewkid from "./viewkid";
import Viewmen from "./viewmen";
import Viewspcl from "./viewspcl";
import Women from "./women";
const AdminPortal  = () => {
    return ( 
        <div className="userportal">
                <AdminNav/>
            <Routes>
                <Route path="/" element={<AdminBanner/>}/>
                <Route path="/women" element={<Women/>}/>
                <Route path="/addwomen" element={<AddWomen/>}/>
                <Route path="/men" element={<Men/>}/>
                <Route path="/addmen" element={<AddMen/>}/>
                <Route path="/kid" element={<Kid/>}/>
                <Route path="/addkid" element={<AddKid/>}/>
                <Route path="/spcl" element={<Spcl/>}/>
                <Route path="/addspcl" element={<AddSpcl/>}/>
                <Route path="/userinfo" element={<UserInfo/>}/>
                <Route path="/women/:id" element={<Viewitems/>}/>
                <Route path="/men/:id" element={<Viewmen/>}/>
                <Route path="/kid/:id" element={<Viewkid/>}/>
                <Route path="/spcl/:id" element={<Viewspcl/>}/>
                <Route path="*" element={<Pagenot/>}/>
            </Routes>
            <Footer/>          
        </div>
     );
}
 
export default AdminPortal;
