import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import RestrauntCard, { withPromotedLabel }from "./RestrauntCard";

const Body = () => {
      
  const [listOfRestraunts, setListOfRestraunt]=useState([]);
  const [filteredRestraunt,setFilteredRestraunt]=useState([]);
  
  const [searchText, setSearchText] = useState("");

   

  useEffect (() => {
    fetchData();
  },[]);

  const fetchData= async ()=>{
      
    const data= await fetch (
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

const json = await data.json();
console.log(json);

if (listOfRestraunts.length === null )
  return  <Shimmer /> ;
 
  

setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

  



return   (
<div className="container  mx-auto flex-auto ">
  <div className="filter">
    <div className=" m-4 p-4  ">
      <input
        type="text"
        className="border border-solid border-black rounded-lg"
        value={searchText}
        onChange={(e) => { 
          setSearchText(e.target.value);
        }}
      />
      <button  className="m-2 p-2 bg-slate-200 rounded-lg"
        onClick={() => {
       
          console.log(searchText);
           const filteredRestraunt = listOfRestraunts.filter((res) =>
            
           res.info.name.toLowerCase().includes(searchText.toLowerCase())

            );
            
setFilteredRestraunt(filteredRestraunt);

}}
        >
          Search
        </button>
</div>
    
<button
  className="px-2 py-3 bg-slate-200 rounded-lg "
  onClick={() =>
    {
  const filteredList= listOfRestraunts.filter(
    (res) => res.info.avgRating < 4
     
  );
  setListOfRestraunt(filteredList);

    } }
  >
    top rated
  </button>
   </div>

<div className="flex">

  {filteredRestraunt.map((restaurant) => (



   /*    higher order function


   {restaurant.data.promoted ? (
   <RestrauntCardProomoted resData={restaurant} />
   ) : (
    <RestrauntCard resData={restaurant} />
   )}
   */

        <RestrauntCard key={restaurant.info.id} resData={restaurant} />
      
     
   ))}





   </div>
</div>
);
};

  export default Body;


