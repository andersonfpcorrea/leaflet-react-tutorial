import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

const themes = {
  dark: {
    urlTemplate:
      'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    options: {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    },
  },
  standard: {
    urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
  },
};

export default function useMap(): void {
  useEffect(() => {
    // Inicia o map
    const map = L.map('map').setView([51.505, -0.09], 13);
    // Adiciona uma tile layer ao mapa
    L.tileLayer(themes.standard.urlTemplate, themes.standard.options).addTo(
      map
    );
    // Adiciona marker a Layer
    L.marker([51.5, -0.09])
      // Adiciona marker ao mapa
      .addTo(map)
      // Adiciona event listener para cliques no marker
      .on('click', () =>
        map.setView([51.5, -0.09], 13, { animate: true, duration: 1 })
      )
      // Adiciona um popup ao marker
      .bindPopup('Hello')
      // Abre o popup
      .openPopup();
    return () => {
      map.remove();
    };
  }, []);
}
