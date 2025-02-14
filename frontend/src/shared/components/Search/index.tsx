import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.scss";

type SearchProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

export const Search = ({
  placeholder = "Buscar...",
  onSearch,
}: SearchProps) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};
