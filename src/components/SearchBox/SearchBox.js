import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input 
            className='pa3 ba b--green br4'
            type='search' 
            placeholder='Search Robots'
            onChange={searchChange} 
            style={{margin: '1rem 0 3rem 0'}}  
            />
        </div>
    );
}

export default SearchBox;