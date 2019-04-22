import React from "react";
import Data from "./Data";
import Card from "./Card";

class CardHolder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: []
      }
    }

    render() {
        return (
            <div>
                <h2>Meet the Counselors!</h2>
                {Data.counselors.map(counselor => (
                <Card counselor={counselor} />))}
            </div>
        );
    }
}
    
export default CardHolder;
