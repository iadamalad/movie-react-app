import React, { useState } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
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
  const loadMoreMovies = () => {
    const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${SEARCH_TERM}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${
      currentPage + 1
    }`;

    const endPoint = searchTerm ? searchEndpoint : popularEndpoint;
    fetchMovies(endPoint);
  };
  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />
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
      <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
    </>
  );
}

export default Home;
