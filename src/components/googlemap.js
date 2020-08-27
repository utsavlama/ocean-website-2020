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
            map = new google.maps.Map(document.getElementById("map"), {
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
            <div className="map" id="map">

                <Helmet>
                    <script src="https://maps.googleapis.com/maps/api/js?key=MY_KEY&callback=initMap" async defer />
                </Helmet>
            </div>
        );
    }

}