import React from "react";
import './custom.css'
import Task from "./Task";

class TasklistHolder extends React.Component {
    constructor(props) {
      super(props);
      this.staticItems = ["Item placeholder 1", "Item placeholder 2"];
    }

    render() {
        return (
            <div>
                <h2>This is your Tasklist!</h2>               
                <div>
                    {this.staticItems.map((text, index) => 
                    ( 
                        <Task key={index} text={text}/>
                    ))}
                </div>
            </div>
        );
    }
}
    
export default TasklistHolder;