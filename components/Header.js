import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";


const Header =() => {
    
  const[btnNameReact,setBtnNameReact] = useState("login");
  


     return(
      <div className="header">
      <div className="logo-container">
    <img className="logo" 
    src={LOGO_URL}
   />
    </div>
    <div className="nav-item">
          <ul>

          
          <li><Link to="/">Home</Link></li>
          

            <li><Link to="/about">About</Link></li>
          
            <li><Link to="/contact">Contact</Link></li>

       
          <button 
                  className="login"  
                     onClick={()=> {
                     setBtnNameReact("logout");
                     }
                    } 
          >
            {btnNameReact}
          </button>
          </ul>
  
    </div>
  </div>
  
  );
  };
  
export default Header;