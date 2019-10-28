import React from "react";
import { Link } from "react-router-dom";

class Details extends React.Component {
  constructor(props){
    super(props);
    this.state = { person: ""};
  }

  getPerson = async () => {
    // dynamically fetch person data
    const response = await fetch("http://localhost:3001/profile/GraceHopper.json");
    console.log(response);
  }

  render(){
    this.getPerson();
    return(
      <h1>PEOPLE PERSON</h1>
    )
  }
}
export default Details;
