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
    =resInfo?.cards[20]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

    
   /* 
  const { itemCards } =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

const categories =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  */             




    return( 
      <div className=" size-7 shadow-md ">
             
              <h1>{name}</h1>
              <h2 className="size-4">{cuisines.join(",")}</h2>
                

</div>
    
    
    
  );
  
};


export default RestrauntMenu;