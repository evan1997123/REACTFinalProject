import React from 'react';


class Technique extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question,
            strategy: this.props.strategy
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.question !== this.props.question)
        {
            this.setState({
                question: this.props.question,
                strategy: this.props.strategy
            })
        }
    }

    render() {
        return (
            // <div>{this.state.question}</div>
            <div>
                Insert Google Slide about "{this.state.strategy}" to answer "{this.state.question}".
                {/* <Carousel>
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
            </div>
        )
    }
}

export default Technique;