import React, { useState } from "react";

export default function Search({ searchMovies }) {
  const [value, setValue] = useState("");

  const onChangeText = (e) => {
    setValue(e.target.value);
  };

  const onEnter = (e) => {
    const title = value.trim();
    if (e.key === "Enter") {
      searchMovies(title);
    }
  };

  return (
    <div className="search-container">
      <input
        placeholder="Search movie by titles... "
        value={value}
        onChange={onChangeText}
        onKeyUp={onEnter}
      />
    </div>
  );
}
