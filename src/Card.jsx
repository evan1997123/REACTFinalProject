import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props); // this.props.counselor is da counselor
        this.state = {
        }
    }

    render() {
        return (
            <p>{this.props.counselor.name}</p>
        );
    }
}
    
export default Card;



