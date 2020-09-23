import React from 'react';

const SearchBar = (props) => {
   
    return ( 
        <div>
            <input type="search" name="" id="" placeholder="search track name" onChange={props.change}/>
        </div>
     );
}
 
export default SearchBar;