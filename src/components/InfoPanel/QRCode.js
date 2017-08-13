import React, { Component } from 'react';


class QRCode extends Component {
  constructor(props) {
    super(props);
    this.state={
      labelText: props.textValue,
    }
  }


  render() {
    return (
        <div>
        <img src={this.props.imgSrc} width={this.props.width/1.5} height={this.props.width/1.5}  />
        </div>
    );

  }
}




export default QRCode;
