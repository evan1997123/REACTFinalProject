import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  toggleDone() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    let className = "";
    if (this.state.done) {
      className = "done";
    }
    let temp = this.state.done;
    return (
      <div>
        <li className={className} onClick={() => this.toggleDone()}>
          {this.props.text}
        </li>
      </div>
    );
  }
}

export default Task;
