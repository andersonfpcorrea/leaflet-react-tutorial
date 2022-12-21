import { ReactElement } from 'react';
import useMap from './hooks/useMap';

export default function App(): ReactElement {
  useMap();
  return <div id='map' style={{ height: '100vh', width: '100vw' }}></div>;
}
