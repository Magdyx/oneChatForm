import React, { Component } from 'react';
import Input from './Input'
import LocationInput from './LocationInput'
import QRCode from './QRCode'
import EditForm from './EditForm';
import Map from './Map';
import Image from './Image';
import { Container } from 'muicss/react';

class InfoForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            check: true,
            branch:{
                name: props.branch.name,
                password: props.branch.password,
                location: props.branch.location,
                qrCode: props.branch.qrCode,
                position: {
                    lat: props.branch.position.lat,
                    lng: props.branch.position.lng
                }
            }
        }
        this.undisableTxt = this.undisableTxt.bind(this);
        this.onChangeBranchInfo = this.onChangeBranchInfo.bind(this);
    }

    undisableTxt(e) {
        this.setState({check: !this.state.check }) ;
        e.preventDefault();
    }

    onChangeBranchInfo(name, password, location, position) {
        console.log(position.lat,position.lng);
        console.log('in change branch info');
        const newBranch = {
            name: name,
            password: password,
            location: location,
            qrCode: this.state.branch.qrCode,
            position: {
                lat: position.lat,
                lng: position.lng
            }
        }
        this.setState({
            branch: newBranch
        });
        //this.props.onChangeBranchInfo(this.state.branch);

    }

    onChangePosition(x, y) {
        console.log(x, y);
        console.log('in info form');
        this.setState({
            branch: {
                name: this.state.branch.name,
                password: this.state.branch.password,
                location: this.state.branch.location,
                qrCode: this.state.branch.qrCode,
                position: {
                    lat: x,
                    lng: y
                }
            }
        });
        //this.props.onChangeBranchInfo(this.state.branch);
    }

    render() {
        const {name, password, location, position, qrCode} = this.state.branch;
        return (
            <Container>
                <div
                    className="App"
                    width={this.props.width}
                    height={this.props.height}
                    style={{
                        textAlign:"left",
                        top:this.props.top,
                        left:this.props.left,
                        position: "absolute"
                    }}
                >
                    <div style={{
                            textAlign:"left",
                            width:this.props.width*2.8,
                            height:this.props.height/4
                        }}
                    >
                        <Input
                            title="User Name : "
                            type="text"
                            textValue={name}
                            width={this.props.width}
                            disabled={this.state.check}
                        />
                        <Input
                            title="Password  : "
                            type="password"
                            textValue={password}
                            width={this.props.width}
                            disabled={this.state.check}
                        />
                        <LocationInput
                            title="Location  : "
                            type="text"
                            textValue={location}
                            width={this.props.width}
                        />
                        <EditForm
                            xMarginButton={this.props.width*2.8}
                            yMarginButton="-6px"
                            branch={this.state.branch}
                            onChangePosition={this.onChangePosition.bind(this)}
                            onChangeBranchInfo={this.onChangeBranchInfo.bind(this)}
                        />
                    </div>

                    <div style={{ width: this.props.width*2.8, height:this.props.height/3}}>
                        <Map
                            onChangePosition={this.onChangePosition.bind(this)}
                            width={this.props.width*2.8}
                            height={this.props.height/3}
                            lng={position.lng}
                            lat={position.lat}
                            google={window.google}
                        />
                    </div>

                    <form style={{
                            textAlign:'center',
                            width:this.props.width*2.8,
                            height:this.props.height/3
                        }}
                          width={this.props.width}
                    >
                        <Image imgSrc={qrCode} />
                        <QRCode
                            imgSrc={qrCode}
                            width={this.props.width}
                        />
                    </form>
                </div>
            </Container>
        );
    }
}

export { InfoForm };