import React from 'react';

class PugCard extends React.Component {

    render() {
        return (
            <div className="cards">
                <img src={this.props.pugURL} alt="~pug~"/>
            </div>
        );
    }
}

    
export default PugCard;
