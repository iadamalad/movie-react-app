import React, { useState, useRef } from "react"; //if you want to have value which you want to mutuate but also keep in between renders,
//you can use useRef
import FontAwesome from "react-fontawesome";
import {useHomeFetch} from "../hooks/useHomeFetch";
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "../styles/StyledSearchBar";

function SearchBar({ callback }) {
  const [state, setState] = useState("");
  const timeout = useRef(null);
 
  function doSearch(event){ //controlled component is component in which we have a cycle between the input and state, so the state depicts the 
    //value of the input field, but the input field triggers to set the set state, so it's a cycle
    const{value} = event.target; 
    
    clearTimeout(timeout.current);
    setState(value); 

    timeout.current = setTimeout(() => {
      callback(value);
    }, 500);
  }

  return (
    <StyledSearchBar >
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
}

export default SearchBar;
