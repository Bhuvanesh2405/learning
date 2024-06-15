import { CDN_URL } from "../utils/constants";



const RestrauntCard = (props) =>{
   const {resData} = props;

const{  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating,
  costForTwo,
} = resData?.info;
  return (

   

    <div className="card">
      
      <img className="reslogo"
        src={
         CDN_URL +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla.slaString} minutes</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

  
  
export default RestrauntCard;
