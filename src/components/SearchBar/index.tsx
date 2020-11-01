import React, { useState } from 'react';
import './index.css';

export const SearchBar: React.FC<SearchBarProps> = ({
  city,
  searchCity,
  loading,
}) => {
  const [value, setValue] = useState(city);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    value === '' ? alert('City can not be empty') : searchCity(value);
  };

  return (
    <div className='SearchBar'>
      <div className='SearchBarChilds'>
        <h5 className='text-white'>Search weather on your city</h5>

        <form onSubmit={handleFormSubmit}>
          <input
            type='text'
            name='city'
            id='inputSearchCity'
            onChange={onChange}
            placeholder={'Search City...'}
          />
          <button type='submit' className='btn btn-outline-info text-white'>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
