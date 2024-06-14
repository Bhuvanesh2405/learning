import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import RestrauntCard from "./RestrauntCard";

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
<div className="body">
  <div className="filter">
    <div className="search">
      <input
        type="text"
        className="search-box"
        value={searchText}
        onChange={(e) => { 
          setSearchText(e.target.value);
        }}
      />
      <button
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
  className="filter-btn"
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

<div className="rescontainer">

  {filteredRestraunt.map((restaurant) => (
     <RestrauntCard key={restaurant.info.id} resData={restaurant} />
  ))}
   </div>
</div>
);
};

  export default Body;


