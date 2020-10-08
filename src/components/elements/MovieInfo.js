import React from "react";
import { StyledMovieInfo } from "../styles/StyledMovieInfo";
import MovieThumb from "./MovieThumb";

const MovieInfo = function () {
  return (
    <StyledMovieInfo backdrop="">
      <div className="movieinfo-content">
        <MovieThumb className="movieinfo-thumb" />
      </div>
    </StyledMovieInfo>
  );
};

export default MovieInfo;
