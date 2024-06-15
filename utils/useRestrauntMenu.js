import { useEffect } from "react";
import { MENU_URL } from "./constants";
  
  const useRestrauntMenu =() => {
       
    useEffect(() =>  {
               fetchMenu();

        }
    ,[]);



    const [resInfo,setResInfo]=useState(null);

    const fetchMenu = async () => {
        const data = await fetch+{MENU_URL}

const json= await data.json();
console.log(json);
setResInfo(json.data);


    }
    return(resId);
  }
  
  export default useRestrauntMenu;


  