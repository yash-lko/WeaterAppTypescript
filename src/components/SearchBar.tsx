import React, { useState } from 'react';
import { useWeatherContext } from '../context/Context';
import searchIcon from '../assets/search.png'

export const SearchBar: React.FC = () => {
  const { setCity, city: initialCity } = useWeatherContext();
  const [city, setLocalCity] = useState(initialCity);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalCity(e.target.value);
  };

  const handleClick = () => {
    setCity(city);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <input className="text" onChange={handleChange} value={city} />
        <button className="animation" type='submit' onClick={handleClick}>
          <img src={searchIcon}/>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
