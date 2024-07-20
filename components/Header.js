import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";


const Header =() => {
    
  const[btnNameReact,setBtnNameReact] = useState("login");
  


     return(
    <div className="flex justify-between bg-slate-200  ">
      <div className="h-25">
    <img className="w-20" 
    src={LOGO_URL}
   />
    </div>
    <div className="flex items-center">
          <ul className="flex p-15 m-15 px-3">

          
          <li className="px-4"><Link to="/">Home</Link></li>
          

            <li className="px-4"><Link to="/about">About</Link></li>
          
            <li className="px-4"><Link to="/contact">Contact</Link></li>

            <li className="px-4"><Link to="/cart">Cart</Link></li>  
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