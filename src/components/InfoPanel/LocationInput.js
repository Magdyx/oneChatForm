import React, { Component } from 'react';

class LocationInput extends Component {
    constructor(props) {
        super(props);
        this.state={
            labelText: props.textValue,
            check: true
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({labelText: nextProps.textValue});
    }

    render() {
        return (
            <form>
                <div style={{width: this.props.width*10, verticalAlign: "text-top"}}>
                    <label style={{
                                verticalAlign: "text-top",
                                textAlign:"left",
                                fontSize: this.props.width/8,
                                lineHeight: "150%",
                                fontFamily: 'bold'
                            }}
                    >
                        {this.props.title}
                    </label>
                    <textarea
                        rows="3"
                        cols="40"
                        readOnly
                        value={this.state.labelText}
                        style={{
                            verticalAlign: "text-top",
                            border:"none",
                            textAlign:"left",
                            fontSize: this.props.width/8,
                            fontFamily: 'bold'
                        }}>

                    </textarea>
                </div>
            </form>
        );
    }
}




export default LocationInput;
