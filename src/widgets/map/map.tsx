import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import './map.css'

const containerStyle = {
    width: '100%',
    height: '450px',
    borderRadius: '20px',
    border: '5px solid #2FB4AD'
};

const coords = {
    lat: 40.860062,
    lng: -8.626264
};
const MapComponent: React.FC = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY
    });

    if (!isLoaded) return <div>Carregando...</div>;



    return (
        <>
            <section className='map-section'>
                <div className='map-container' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={coords}
                        zoom={15} >
                        <Marker position={coords} />
                    </GoogleMap>
                </div>
            </section>
        </>
    );
};

export default MapComponent;
