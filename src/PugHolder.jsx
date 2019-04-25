import React from "react";
import PugCard from "./PugCard.jsx";
import './custom.css'

class PugHolder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pugList: [],
        currentList:[],
        amount: 5
      }
    }

    async getDogs() {
      console.log("Dogs Come");
      let response = await fetch("https://acoustic-bit.glitch.me/pug");
      let text = await response.json();
      this.setState({
          pugList: [...new Set(text.pugs)],
          currentList: [...new Set(text.pugs)].slice(0,this.state.amount)
      });    
  }

  componentDidMount()
  {
    this.getDogs();
    this.refs.iScroll.addEventListener("scroll", () => {
      if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight)
        this.updatePugs();
        console.log("updated");
        console.log(this.state.currentList)
      }
    );
    console.log("mounted");
  }
  
  updatePugs (){
    console.log('header bottom reached');
    if(this.state.amount + 2 >= this.pugList.length)
    {
      this.setState(prevState => ({
        currentList: [...prevState.currentList,...prevState.pugList.slice(prevState.amount,prevState.amount+2)],
        amount: prevState.amount + 2
      }));
    }
  }

  render() {
      return (
          <div id='header' ref="iScroll">
              <h2>Meet the Pugs! Arf!</h2>
              {this.state.currentList.map((pugURL,i) => (
              <PugCard pugURL={pugURL} key={i} number={i}/>))}             
          </div>
      );
  }
}
    
export default PugHolder;
