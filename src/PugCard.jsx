import React from 'react';

class PugCard extends React.Component {

    render() {
        return (
            <div>
                <p>This is pug {this.props.number}</p>
                <img src={this.props.pugURL} alt="~pug~"/>
            </div>
        );
    }
}

    
export default PugCard;
