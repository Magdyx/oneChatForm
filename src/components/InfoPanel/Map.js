import React, {Component} from 'react';
import {
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';
import { Button } from 'muicss/react';
import Ionicon from 'react-ionicons';

let x = 0;
let y = 0;

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: {
                lng: props.lng,
                lat: props.lat
            },
            center: {
                lng: props.lng,
                lat: props.lat
            },
            edittable: false
        }
        x = props.lat;
        y = props.lng;
        this.handleMapClicked = this.handleMapClicked.bind(this);
    }

    /*
    change the marker position if the map is clicked and editing is enabled
    also calls callback function
     */
    handleMapClicked(event) {
        if(this.state.edittable) {
            this.setState({position: event.latLng});
            const {lat, lng} = this.state.position;
            x = lat();
            y = lng();
            console.log(lat(), lng());
            //TODO: change invoking callback function to edit button on state check mark
            // this.props.onChangePosition(x, y);
        }
    }

    /*
    change state of parent when the state of child changes
     */
    componentWillReceiveProps(nextProps) {
        this.setState({position: {
            lat: nextProps.lat,
            lng: nextProps.lng
        },
        center: {
            lat: nextProps.lat,
            lng: nextProps.lng
        }
        })
    }

    /*
     show edit state of the map
     @return edit icon if editing is not enabled and check mark if editing is enabled
     */
    renderIcon() {
        if (!this.state.edittable) {
            return (
                <Ionicon
                    icon="ion-checkmark-round"
                    fontSize="25px"
                    color="#bfbfbf"
                    style={{position: 'relative', right: '7px', top: '7px'}}
                />
            );
        }else{
            return (
                <Ionicon
                    icon="ion-checkmark-round"
                    fontSize="25px"
                    color="#00FF00 "
                    style={{position: 'relative', right: '7px', top: '7px'}}
                />
            );
        }
    }

    /*
    show edit button only if enableEdit parameter is passed
    @return round edit button at top corner of the map
     */
    renderButton() {
        if (this.props.enableEdit) {
            return (
                <div style={{width:this.props.width}}>
                    <Button
                        size="small"
                        color="primary"
                        variant="fab"
                        onClick={() => {
                            this.setState({edittable: !this.state.edittable});
                            console.log(x,y);
                            console.log('in map');
                            if (this.state.edittable)
                                this.props.onChangePosition(x, y);
                        }}
                        style={{
                            position: 'relative',
                            bottom: this.props.height*0.4,
                            left:this.props.width*0.84}}
                    >
                        {this.renderIcon()}
                    </Button>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <MapWrapper
                    style={{
                        height: 100,
                        width: 100,
                        position: 'relative',
                        top: '0px',
                        left: '0px'
                    }}
                    containerElement={
                        <div style={{ height: '100%' }} />
                    }
                    mapElement={
                        <div style={{ height: this.props.height }} />
                    }
                    position={this.state.position}
                    center={this.state.center}
                    onMapClick={this.handleMapClicked}
                />
                {this.renderButton()}
            </div>
        )
    }
}

const MapWrapper = withGoogleMap(props => (
    <div>
        <GoogleMap
            style={{
                height: 100,
                width: 100,
            }}
            defaultZoom={14}
            defaultCenter={props.center}
            center={props.center}
            onClick={props.onMapClick}
        >
            <Marker
                position={props.position}
            />
        </GoogleMap>
    </div>
))
