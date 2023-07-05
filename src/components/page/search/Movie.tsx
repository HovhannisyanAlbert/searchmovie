import React, { useEffect } from "react";
import styles from "./search.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { RootState, usedispatch } from "../../feautures/store";
import { ViewMovie } from "../../feautures/thunk";
import { useSelector } from "react-redux";
const Movie = () => {
  const { viewMovie } = useSelector((state: RootState) => state.search);
  const { id } = useParams();
  const dispatch = usedispatch();

  useEffect(() => {
    dispatch(ViewMovie(id));
  }, []);
  const navigate = useNavigate()

  const exit = () => {
    navigate("/")
  }

  return (
    <div className={styles.container}>
    <h2>{viewMovie.Title}</h2>
    <img src={viewMovie.Poster} alt="img is not define" title={viewMovie.Title} />
    <h2>{viewMovie.Awards}</h2>
    <h2>{viewMovie.Genre}</h2>
    <h2>{viewMovie.Country}</h2>
    <h2>{viewMovie.Actors}</h2>
    <h2>{viewMovie.Plot}</h2>
    <h2>{viewMovie.Year}</h2>
    <h2>{viewMovie.imdbRating}</h2>

    <button onClick={exit} className={styles.exitBtn}> Exit</button>
  </div>
  );
};

export default Movie;
