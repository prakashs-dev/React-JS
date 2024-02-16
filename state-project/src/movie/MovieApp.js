import React, { useState } from "react";
import Search  from "./Search";
import  MovieCard  from "./MovieCard";
import "./movies.css";
import { movies as MoviesList } from "./MovieData";

export const MovieApp = () => {
  const [movies, setMovies] = useState(MoviesList);

  const searchMovies = (searchValue) => {
    const filteredMoives = MoviesList.filter((movie) => {
      return movie.Title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });
    setMovies(filteredMoives);
  };

  return (
    <>
      <Search searchMovies={searchMovies} />
      <div className="movie-cards">
        {
            movies.map(movie => <MovieCard movieInfo={movie} key={movie.imdbID}/>)
        }
      </div>
    </>
  );
};
