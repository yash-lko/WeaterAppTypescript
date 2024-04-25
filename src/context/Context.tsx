import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

interface WeatherContextType {
  city: string;
  weatherData: WeatherData | null;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
};

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [city, setCity] = useState('Gorakhpur');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const apiKey = '2fa4c611b03d17149103810f89f60caa';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  return (
    <WeatherContext.Provider value={{ city, weatherData, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};
