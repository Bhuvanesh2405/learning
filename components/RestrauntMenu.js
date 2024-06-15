import useRestrauntMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestrauntMenu= () => {   

  const {resId} = useParams();
   const resInfo =  useRestrauntMenu(resId);

    
   
   if (resInfo === null ) return
   <Shimmer />;
   
   console.log(resInfo);


   
   const {name,cuisines} 
    =resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

    
    
    return( 
      <div className="menu">
             
              <h1>{name}</h1>
              <h2>{cuisines.join(",")}</h2>
                

</div>
    
    
    
  );
  
};

export default RestrauntMenu;