import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


class MyCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          counselor: this.props.counselor
      }
    }

    async getBio() {
        let response = await fetch(this.state.counselor.linkedinurl);

    }

    render() {
        let {counselor} = this.state;
        let specialty;
        if (counselor.specialties.length === 0) {
            specialty = <ListGroupItem>Specialty: None</ListGroupItem>
        } else if (counselor.specialties.length === 1) {
            specialty = <ListGroupItem>Specialty: {counselor.specialties}</ListGroupItem>
        } else {
            let temp = "Specialties: ";
            for(let i = 0 ; i < counselor.specialties.length;i++){
                if(i === counselor.specialties.length - 1) {
                    temp+= counselor.specialties[i];
                    break;
                }
                temp += counselor.specialties[i] + ", ";
            }
            specialty = <ListGroupItem>{temp}</ListGroupItem>
        }
        return (
            <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={counselor.pictureurl} />
            <Card.Body>
                <Card.Title>{counselor.name}</Card.Title>
                <Card.Text>
                Some Bio
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {specialty}
                <ListGroupItem>Location: {counselor.location} </ListGroupItem>
                <ListGroupItem>Favorite Food: {counselor.favoriteFood}</ListGroupItem>
            </ListGroup>

            </Card>
            </div>
        );
    }
}
    
export default MyCard;
