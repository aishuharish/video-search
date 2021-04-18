import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onInputSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(term);
    //TODO: make sure we call
    //callback from parent component
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onInputSubmit}>
        <div className="field">
          <label>Video Search </label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
