import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import {Button} from 'muicss/react';

const images = [];

export default class Image extends Component {
    constructor(props) {
        super(props);
        images.push(this.props.imgSrc);
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;

        return (
            <div>
                <Button 
                    type="button"
                    onClick={() => this.setState({ isOpen: true })}
                    style={{background: " transparent" ,fontSize: "18"}}
                >
                    <u>
                    Show QR Code
                    </u>
                </Button>

                {isOpen &&
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                    onCloseRequest={() => this.setState({ isOpen: false })}
                />
                }
            </div>
        );
    }
}
