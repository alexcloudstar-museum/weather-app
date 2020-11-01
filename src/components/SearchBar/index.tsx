import React, { useState } from 'react';
import './index.css';

export const SearchBar: React.FC<SearchBarProps> = ({ city, searchCity }) => {
  const [value, setValue] = useState();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    city === '' ? alert('City can not be empty') : searchCity(city);
  };

  const onChange = (e: any) => setValue(e.target.value);

  return (
    <div className='SearchBar'>
      <div className='SearchBarChilds'>
        <h5 className='text-white'>Search weather on your city</h5>

        <form onSubmit={onSubmit}>
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
