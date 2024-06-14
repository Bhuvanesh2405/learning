 import React from "react";

 class UserClass extends React.Component {
          constructor(props) {
            super(props);
        
            this.state = {
              userInfo: {
                name : "dummy",
                location : "default",
              
              avatar_url: "https://dummy"},
            };



                    console.log(this.props.name + "child  constructor")
         
          }    

             componentDidMount(){
              console.log(this.props.name + "child  componentDidMount");
             }
 
  async componentDidMount (){
  const data = await fetch("https://api.github.com/users/Bhuvanesh2405");
  const json = await data.json();
  console.log(json);

  this.setState(
    {
      userInfo : json,
    }
  );
   
}



          render(){
            
         
            const{name,location,avatar_url}=this.state.userInfo;
            
          
        return(
          <div className="user-card">
          <img src= {avatar_url} />
         <h1> Name :{name}</h1>
         <h1>Location: { location}</h1>
        <h1>Contact : @Bhuvan_2405</h1>
        
        </div>
    );

}
 }
 
export default UserClass;


