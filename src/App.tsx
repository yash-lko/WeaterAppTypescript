import React from 'react';
import Card from './components/Card';
import { WeatherProvider } from './context/Context';
const App: React.FC = () => {
  return (
    <WeatherProvider>
      <Card />
    </WeatherProvider>
  );
};

export default App;
