import React, { useState } from "react";
import {
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  SEARCH_ENDPOINT,
  POPULAR_ENDPOINT,
} from "../config.js";

import Header from "./elements/Header";
import Grid from "./elements/Grid";
import HeroImage from "./elements/HeroImage";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import MovieThumb from "./elements/MovieThumb";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";

//Custom Hooks
import { useHomeFetch } from "./hooks/useHomeFetch";
import NoImage from "./images/no_image.jpg";

//<React.fragment></React.fragment> or <> </> will wrap all of our components but will not create a new component in the DOM

function Home() {
  //can desturcture further by {state: {heroImage, movies, currentPage, totalPages}}
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");
  if (error) return <div>Something went wrong!</div>;
  if (!state.movies[0]) return <Spinner />;

  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_ENDPOINT + search : POPULAR_ENDPOINT;
    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_ENDPOINT}${searchTerm}&page=${
      state.currentPage + 1
    }`;

    const popularEndpoint = `${POPULAR_ENDPOINT}&page=${state.currentPage + 1}`;

    const endPoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endPoint);
  };
  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
          title={state.heroImage.original_title}
          text={state.heroImage.overview}
        />
      )}

      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.currentPage < state.totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </>
  );
}

export default Home;
