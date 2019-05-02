import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Technique from './Technique';
import TechniqueData from './TechniqueData';

class SymptomsHolder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symptoms: {loneliness: false, stress: false, anxiety: false, depression: false, insomnia: false}
        }
        this.displayTechnique = this.displayTechnique.bind(this); // binding
    }

    displayTechnique(e) {
        let symptom = e.target.id; // loneliness
        // console.log(symptom);
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
        // console.log(this.state.symptoms);
    }

    render() {
        // iterate through dictionary, find key corresponding to true value
        // if lonliness = true, display lonliness component
        let technique;
        let specific = null; // specific = the button user clicked on
        let copy = this.state.symptoms; // copy of array
        for (var key in copy) {
            if(copy[key]==true) {
                specific = key;
            }
        }     
        if (specific) {
            // console.log(specific);
            let data = TechniqueData[specific]
            console.log(data)
            technique = (
                <div>
                    <Technique question={data.question} strategy={data.strategy} />
                </div>
            );
        }

        return(
            <div>
                <ButtonToolbar>
                <Button variant="primary" size="lg" id="loneliness" onClick={this.displayTechnique}>Loneliness</Button>
                <Button variant="secondary" size="lg" id="stress" onClick={this.displayTechnique}>Stress</Button>
                <Button variant="success" size="lg" id="anxiety" onClick={this.displayTechnique}>Anxiety</Button>
                <Button variant="warning" size="lg" id="depression" onClick={this.displayTechnique}>Depression</Button>
                <Button variant="danger" size="lg" id="insomnia" onClick={this.displayTechnique}>Insomnia</Button>
                </ButtonToolbar>
                {technique}
            </div>
        )
    }
}
export default SymptomsHolder;