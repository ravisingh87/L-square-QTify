import React from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';

function Search({ placeholder }) {
  const onSubmit = (e, value) => {
    e.preventDefault();
    navigate(`/album/${value.slug}`);
    //Process form data, call API, set state etc.
  };

  return (
    <div style={{ position: 'relative' }}>
      <form
        className="wrapper"
        onSubmit={(e) => {
          onSubmit(e, value);
        }}>
        <div>
          <input name="album" className="search" placeholder={placeholder} required />
        </div>
        <div>
          <button className="searchButton" type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
