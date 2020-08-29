import React from 'react';
import './googlemaps.css';
import { Helmet } from 'react-helmet';

export default class GoogleMap extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let map;

        function initMap() {
            map = new window.google.maps.Map(document.getElementById("map"), {
                center: {
                    lat: -34.397,
                    lng: 150.644
                },
                zoom: 8
            });
        }
    }

    render() {
        return (
            <div>

                <Helmet>
                    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyArFkyAHQ6-NFYcnNgn6lkm03npO_0JAPA&callback=initMap"
                        type="text/javascript"></script>
                </Helmet>
                <div className="map" id="map">

                </div>
            </div>
        );
    }

}