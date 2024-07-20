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

   

    <div className="p-4 m-4 w-[250px]  bg-gray-300  rounded-md  hover:bg-slate-400 ">
      
      <img className="rounded-md "
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


 /*   // higherorderfunction 



 
  export const withPromotedLabel = (RestrauntCard) =>{
    return(props) =>{
      return(
              <div>
              <label>Promoted</label>
              <RestrauntCard {...props} />

              </div>

                
      );

    };               

  };
 */


export default RestrauntCard;
