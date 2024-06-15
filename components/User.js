 import {useState} from "react";
 const User =({name}) => {
    const[count]=useState(0);
    const[count2]=useState(1);

    return(
        <div className="user-card">
            
         <h1>Name : {name}</h1>
         <h1>count : {count}</h1>
        <h1>count2 : {count2}</h1>
        <h1>Location:kumbakonam</h1>
        <h1>Contact : @Bhuvan_2405</h1>
        </div>
    );
 };


 export default User;
 