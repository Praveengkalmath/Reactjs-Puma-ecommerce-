import '../Style/banner.css'
import { Link } from 'react-router-dom';
const AdminBanner = () => {
    return ( 
        <div className="banner">
            <div className="info">
            <h1>DISCOUNTS RELOADED</h1> 
            <h4>New Style Added.Shop Now!🛒</h4>
            <div className="btn">
            <Link to='/adminportal/men'><button>MEN</button></Link>
            <Link to='/adminportal/women'><button>WOMEN</button></Link>
            <Link to='/adminportal/kid'><button>KIDS</button></Link>
        </div>
        </div>
        </div>
     );
        
        
}

export default AdminBanner;