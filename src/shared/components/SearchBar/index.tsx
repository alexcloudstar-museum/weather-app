import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { SearchBarWrapper } from './style';
import { SearchBarProps } from './types';

const SearchBar: FC<SearchBarProps> = ({ city, searchCity }) => {
  const [value, setValue] = useState(city);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setValue(target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    value === '' ? alert('City can not be empty') : searchCity(value);
  };

  return (
    <SearchBarWrapper city={city} searchCity={searchCity}>
      <div className='SearchBarChilds'>
        <h5 className='text-white'>Search weather on your city</h5>

        <form onSubmit={handleFormSubmit}>
          <input
            type='text'
            name='city'
            id='inputSearchCity'
            onChange={onChange}
            value={value}
            placeholder={'Search City...'}
          />
          <button type='submit' className='btn btn-outline-info text-white'>
            Search
          </button>
        </form>
      </div>
    </SearchBarWrapper>
  );
};

export default SearchBar;
