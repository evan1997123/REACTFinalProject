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
      this.updatePugs = this.updatePugs.bind(this);
      this.getDogs = this.getDogs.bind(this);
    }

  async getDogs() {
    let response = await fetch("https://acoustic-bit.glitch.me/pug");
    let text = await response.json();
    let temp = this.state.pugList.concat(text.pugs).filter(this.uniq);
    this.setState({
      pugList: temp
  });
  }

  uniq(value,index,self) {
    return self.indexOf(value)===index;
  }

  componentDidMount()
  {
    this.getDogs();
    document.addEventListener("scroll", () => {
        const wrappedElement = document.getElementById('header');
      if (this.isBottom(wrappedElement)) {
        setTimeout(this.getDogs, 100);
      }
      }
    );
  }
  
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }
  
  updatePugs (){
      this.getDogs();
  }

  render() {
      return (
          <div id='header' ref="iScroll" className="pugBackground">
            <div className="title">Pugs for Pawsitivity</div>

            <div className="subtext">
              <h2>Meet the Pugs! Arf!</h2>
            </div>
              {this.state.pugList.map((pugURL,i) => (
              <PugCard pugURL={pugURL} key={i} number={i}/>))}             
          </div>
      );
  }
}
    
export default PugHolder;
