import React from 'react';
import { Form, Input, Button } from 'muicss/react';
import {Modal} from 'react-bootstrap';
import Map from './Map';
import Ionicon from 'react-ionicons';

export default class EditForm extends React.Component {
    constructor(props) {
        super(props);
        const {name, password, location, position} = props.branch;
        this.state = {
            show: false,
            old_branch: {
                name: name,
                password: password,
                location: location,
                position: position
            },
            branch: {
                name: name,
                password: password,
                location: location,
                position: position
            }
        };
    }

    handleUsernameChange(event) {
        const {password, location, position} = this.state.branch;

        this.setState({
            branch: {
                name: event.target.value,
                password: password,
                location: location,
                position: position
            }
        });
    }

    handlePasswordChange(event) {
        const {name, location, position} = this.state.branch;

        this.setState({
            branch: {
                name: name,
                password: event.target.value,
                location: location,
                position: position
            }
        });
    }

    handleLocationChange(event) {
        const {name, password, position} = this.state.branch;

        this.setState({
            branch: {
                name: name,
                password: password,
                location: event.target.value,
                position: position
            }
        });
    }

    isEmpty(str){
        if(str === '')
            return true;
        return false;
    }

    handlePositionChanged(x, y){
        const {name, password, location} = this.state.branch;
        console.log(x, y);
        console.log('in handle position change');


        this.setState({
            branch: {
                name: name,
                password: password,
                location: location,
                position: {
                    lat: x,
                    lng: y
                }
            }
        });

        // this.props.onChangePosition(x, y);
    }

    refreshData(e) {
        e.preventDefault();
        const {name, password, location, position} = this.state.branch;
        if(this.isEmpty(name) || this.isEmpty(password) || this.isEmpty(location)) {
            return;
        }
        this.setState({old_branch: this.state.branch});
        this.props.onChangeBranchInfo(name, password, location, position);
        this.setState({ show: false});
    }

    render() {
        let close = () => this.setState({ show: false });
        const {name, password, location, position} = this.state.branch;
        return (
            <div className="modal-container" style={{ height: 200 }}>
                <Button
                    color="primary"
                    variant="fab"
                    size="small"
                    onClick={() => this.setState({ show: true})}
                    style={{position: 'absolute', left: this.props.xMarginButton, top: this.props.yMarginButton}}
                >
                                      <Ionicon
                        icon="ion-compose"
                        fontSize="32px"
                        color="white"
                        style={{position: 'relative', right: '8px', top: '7px'}}
                    />
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={() => {
                        this.setState({
                            branch: this.state.old_branch,
                            show: false
                        })
                    }}
                    container={this}
                    animation={true}
                    aria-labelledby="contained-modal-title"
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Branch Info</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Input
                                label="Username"
                                floatingLabel={true}
                                required={true}
                                defaultValue={name}
                                onChange={this.handleUsernameChange.bind(this)}
                            />

                            <Input
                                label="password"
                                type="password"
                                floatingLabel={true}
                                required={true}
                                defaultValue={password}
                                onChange={this.handlePasswordChange.bind(this)}
                            />

                            <Input
                                label="Location"
                                floatingLabel={true}
                                required={true}
                                defaultValue={location}
                                onChange={this.handleLocationChange.bind(this)}
                            />
                        </Form>

                        <div style={{width: '550px', height: '230px' }}>
                            <Map

                                width='550'
                                height='230'
                                lng={position.lng}
                                lat={position.lat}
                                enableEdit
                                onChangePosition={this.handlePositionChanged.bind(this)}
                                google={window.google}
                            />
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="raised" color="primary" onClick={this.refreshData.bind(this)}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );

    }

}
