import { useState } from "react";
import style from "./SearchBar.module.css";
import { MdOutlineSearch } from "react-icons/md";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.formContainer}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Image and photo search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={style.input}
          />
          <MdOutlineSearch className={style.icon} size="16px" />
        </div>
        <button type="submit" className={style.button}>
          Search
        </button>
      </form>
    </header>
  );
}
