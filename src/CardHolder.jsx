import React from "react";
import Data from "./Data";
import MyCard from "./MyCard.jsx"; 
import './custom.css'

class CardHolder extends React.Component {
    constructor(props) {
      super(props);
      this.state = 
      {
        cards: Data.counselors,
      }
    }

    render() {
        return (
            <div>
                <h2>Meet the Counselors!</h2>               
                <div className="rows">
                {this.state.cards.map(counselor => (
                <MyCard counselor={counselor} key={counselor.id}/>))}
                </div> 
            </div>
        );
    }
}
    
export default CardHolder;
