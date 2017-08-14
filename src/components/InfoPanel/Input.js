import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelText: props.textValue,
            check: props.disabled
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({labelText: nextProps.textValue});
    }

    render() {
        return (
            <form>
                <div style={{width: this.props.width*10}}>
                    <label style={{
                        textAlign:"left",
                        fontSize: this.props.width/8,
                        lineHeight: "150%",
                        fontFamily: 'bold'
                    }} >
                    {this.props.title}
                    </label>
                    <input
                        readOnly
                        style={{
                            background: " transparent",
                            border:"none",
                            textAlign:"left",
                            fontSize: this.props.width/8
                        }}
                        type={this.props.type}
                        value={this.state.labelText}
                    >
                    </input>
                </div>
            </form>
        );
    }
}

export default Input;
