import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon color="red" icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )


const Map = ({ location, zoomLevel }) => (
    <div className="map">
     <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC-x5bgr8re-HPBUdUdEJa69R3c2loXy14' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
export default Map;
