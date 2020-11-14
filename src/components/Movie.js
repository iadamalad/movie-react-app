import React from "react";
import {
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  SEARCH_ENDPOINT,
  POPULAR_ENDPOINT,
} from "../config.js";
import NoImage from "./images/no_image.jpg";

import Actor from "./elements/Actor";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Navigation from "./elements/Navigation";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

import { useMovieFetch } from "./hooks/useMovieFetch";
import { act } from "react-dom/test-utils";

const Movie = ({ movieID }) => {
  const [movieData, loading, error] = useMovieFetch(movieID);
  console.log(movieData);
  if (error) return <div>Something went wrong!</div>;
  if (loading || !movieData.original_title) return <Spinner />;
  return (
    <>
      <Navigation movieName={movieData.original_title} />
      <MovieInfo
        backdrop={movieData.backdrop_path}
        image={
          movieData.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movieData.poster_path}`
            : NoImage
        }
        movieName={movieData.original_title}
        moviePlot={movieData.overview}
        movieDirectors={movieData.directors}
        movieRating={movieData.vote_average}
      />
      <MovieInfoBar
        time={movieData.runtime}
        budget={movieData.budget}
        revenue={movieData.revenue}
      />
      <Grid header="Actors">
        {movieData.actors
          ? movieData.actors.map((actor) => (
              <Actor key={actor.credit_id} actor={actor} />
            ))
          : "No actor"}
      </Grid>
    </>
  );
};

export default Movie;
