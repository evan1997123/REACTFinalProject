import React from "react";
import Data from "./Data";
import MyCard from "./MyCard.jsx"; 
import './custom.css'

class CardHolder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: Data.counselors,
        pugList: []
      }
    }


    componentDidMount()
    {
      this.getDogs();
    }

    async getDogs() {
      console.log("Dogs Come");
      let response = await fetch("https://acoustic-bit.glitch.me/pug");
      let text = await response.json();
      this.setState({
          pugList: text.pugs
      });
  }

    render() {
        return (
            <div>
                <h2>Meet the Counselors! Boo</h2>
                <p>Here is a dog photo url {this.state.pugList[0]}</p>
                <img src={this.state.pugList[0]} alt="pug Pic~" />                
                <div className="rows">
                {this.state.cards.map(counselor => (
                <MyCard counselor={counselor} key={counselor.id}/>))}
                </div>
                
            </div>
        );
    }
}
    
export default CardHolder;
