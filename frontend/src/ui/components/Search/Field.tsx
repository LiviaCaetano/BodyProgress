import { useState } from "react";
import "./styles.scss";

type FieldProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

export const Field = ({ placeholder = "Buscar...", onSearch }: FieldProps) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event?.target?.value);
    onSearch(event?.target?.value);
  };

  return (
    <input
      type="text"
      className="search-input"
      placeholder={placeholder}
      value={query}
      onChange={handleChange}
    />
  );
};
