import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './map.css';

// Coordenadas para centralizar o mapa
const coords = { lat: 40.860062, lng: -8.626264 };

// URL base do seu back-end (substitua pelo domínio público correto do Railway)
const rawAPIBase = 'https://physiotherapy-clinic-server-production.up.railway.app';
// Remove a barra final, se houver, para evitar duplicação na concatenação
const API_BASE_URL = rawAPIBase.replace(/\/+$/, '');

const MapWithApiKey = ({ apiKey }: { apiKey: string }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return <div>Carregando mapa...</div>;

  return (
    <GoogleMap mapContainerClassName="map-style" center={coords} zoom={15}>
      <Marker position={coords} />
    </GoogleMap>
  );
};

const Map: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [keyLoaded, setKeyLoaded] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    // Faz requisição para o endpoint GET /api/map-api-key definido no seu server.js
    fetch(`${API_BASE_URL}/api/map-api-key`)
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Erro na requisição: ${response.status} - ${text}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        setApiKey(data.apiKey);
        setKeyLoaded(true);
      })
      .catch((error) => {
        console.error('Erro ao carregar a API key:', error);
        setErrorMessage('Erro ao carregar a API key.');
      });
  }, []);

  if (errorMessage) return <div>{errorMessage}</div>;
  if (!keyLoaded) return <div>Carregando...</div>;

  return (
    <section className="map-section">
      <div className="map-container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <MapWithApiKey apiKey={apiKey} />
      </div>
    </section>
  );
};

export default Map;
