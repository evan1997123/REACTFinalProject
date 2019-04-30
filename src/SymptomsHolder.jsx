import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

class SymptomsHolder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symptoms: {loneliness: false, stress: false, anxiety: false}
        }
        this.displayTechnique = this.displayTechnique.bind(this); // binding
    }

    displayTechnique(e) {
        let symptom = e.target.id; // loneliness
        console.log(symptom);
        let copy = this.state.symptoms; // copy of array
        for (var key in copy) {
            copy[key]=false;
        // Do stuff. ex: console.log(dict[key])
        }       
        copy[symptom] = true; // set false to true (display lonliness)
        this.setState((prevState) => ({
            // display corresponding technique
            symptoms: copy
        }));
        console.log(this.state.symptoms);
    }

    render() {
        // iterate through dictionary, find key corresponding to true value
        // if lonliness = true, display lonliness component
        let specific = null;
        let copy = this.state.symptoms; // copy of array
        for (var key in copy) {
            if(copy[key]==true)
            {
                specific = key;
            }
        // Do stuff. ex: console.log(dict[key])
        }      
        if(specific) {
            
        }
        return(
            <div>
                <ButtonToolbar>
                <Button variant="primary" size="lg" id="loneliness" onClick={this.displayTechnique}>Lonliness</Button>
                <Button variant="secondary" size="lg">Stress</Button>
                <Button variant="success" size="lg">Anxiety</Button>
                <Button variant="warning" size="lg">Depression</Button>
                <Button variant="danger" size="lg">Insomnia</Button>
                <Button variant="info" size="lg">Info</Button>
                <Button variant="light" size="lg">Light</Button>
                <Button variant="dark" size="lg">Dark</Button>
                <Button variant="link" size="lg">Link</Button>
                </ButtonToolbar>

            </div>
        )
    }
}
export default SymptomsHolder;