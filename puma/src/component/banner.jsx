 import '../Style/banner.css'
 import { Link } from 'react-router-dom';
const Banner = () => {
    return ( 
        <div className="banner">
            <div className="info">
            <h1>DISCOUNTS RELOADED</h1> 
            <h4>New Style Added.Shop Now!🛒</h4>
            <div className="btn">
                <Link to='/userportal/men'><button>MEN</button></Link>
            <Link to='/userportal/women'><button>WOMEN</button></Link>
            <Link to='/userportal/kid'><button>KIDS</button></Link>
            
        </div>
        </div>
        </div>
     );
        
        
}

export default Banner;