"use client";
import styles from "./searchbar.module.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
