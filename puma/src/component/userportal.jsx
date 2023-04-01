
import { Routes,Route } from "react-router-dom";
import Pagenot from "./404";
import Banner from "./banner";
import Footer from "./footer";
import Kid from "./kid";
import Men from "./men";
import Spcl from "./spcl";
import UserNav from "./usernav";
import Viewitems from "./viewitem";
import Viewkid from "./viewkid";
import Viewmen from "./viewmen";
import Viewspcl from "./viewspcl";
import Women from "./women";
const UserPortal = () => {
    return ( 
        <div className="userportal">
                <UserNav/>
            <Routes>
                <Route path="/" element={<Banner/>}/>
                <Route path="/women" element={<Women/>}/>
                <Route path="/men" element={<Men/>}/>
                <Route path="/kid" element={<Kid/>}/>
                <Route path="/spcl" element={<Spcl/>}/>
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
 
export default UserPortal;