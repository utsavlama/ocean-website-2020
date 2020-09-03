import React from 'react';
import './googlemaps.css';

import { Helmet } from 'react-helmet';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100%'
  }

export class GoogleMap extends React.Component {

    render() {
        return (
            <div className="map">
                <Map
                    google={this.props.google}
                    zoom={13}
                    style={mapStyles}
                    containerStyle={containerStyle}
                    initialCenter={
                        {
                            lat: -27.383761,
                            lng: 153.035148
                        }
                    }
                />
            </div>
        );
    }

}

export default GoogleApiWrapper({ apiKey: 'AIzaSyArFkyAHQ6-NFYcnNgn6lkm03npO_0JAPA' })(GoogleMap);