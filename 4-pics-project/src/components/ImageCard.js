import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0};

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // Listening for whenever an image emits a load event
        // This means the image has successfully downloaded the image
        // At this point, we can get the height of the image
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        // Divide hight of image by height of rows
        const spans = Math.ceil(height / 10 + 1);

        this.setState({ spans });
    };

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;