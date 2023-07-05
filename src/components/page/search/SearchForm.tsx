import React, { FC, useEffect, useState } from "react";
import { RootState, usedispatch } from "../../feautures/store";
import { Pagination, SearchTitle } from "../../feautures/thunk";
import styles from "./search.module.css";
import { useSelector } from "react-redux";
import ResultMovie from "./ResultMovie";
import { searchMovies } from "../../feautures/types";

const SearchForm: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const dispatch = usedispatch();
  const { data, resultFilm } = useSelector((state: RootState) => state.search);

  const isResult = resultFilm;
  const handleSearch = () => {
    dispatch(SearchTitle(title));
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);

    dispatch(Pagination({ title, page: page + 1 }));
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);

    dispatch(Pagination({ title, page: page - 1 }));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        placeholder="Search"
        type="text"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />

      <button className={styles.searchBtn} onClick={handleSearch}>
        Search
      </button>

      {data &&
        data.map((elem: searchMovies) => (
          <ResultMovie
            key={elem.imdbID}
            Title={elem.Title}
            Year={elem.Year}
            Poster={elem.Poster}
          />
        ))}

      <button  onClick={nextPage}  className={styles.exitBtn}>next</button>

      <button disabled={page === 0 ? true : false} onClick={prevPage} className={styles.exitBtn}>prev</button>
    </div>
  );
};

export default SearchForm;
