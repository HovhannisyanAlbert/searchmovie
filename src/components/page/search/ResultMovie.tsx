
import { Link } from "react-router-dom";
import { searchMovies } from "../../feautures/types";
import styles from "./search.module.css"


const ResultMovie = ({ Title, Year, Poster }: searchMovies) => {
 
  return (
    <div className={styles.movieBlock}>
   
    <Link to={`/${Title}`}>  <h1>{Title}</h1> </Link>
    <h3>{Year}</h3>
    <img src={Poster} alt="img is not define" title={Title} />
  </div>
  );
};

export default ResultMovie;
