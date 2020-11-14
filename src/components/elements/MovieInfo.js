import React from "react";
import { StyledMovieInfo } from "../styles/StyledMovieInfo";
import NoImage from "../images/no_image.jpg";

import MovieThumb from "./MovieThumb";
import { element } from "prop-types";

const MovieInfo = function ({
  backdrop,
  image,
  movieName,
  moviePlot,
  movieRating,
  movieDirectors,
}) {
  return (
    <StyledMovieInfo backdrop={backdrop}>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <MovieThumb image={image ? image : NoImage} clickable={false} />
        </div>
        <div className="movieinfo-text">
          <h1>{movieName}</h1>
          <h3>PLOT</h3>
          <p>{moviePlot}</p>
          <div className="rating-director">
            <div>
              <h3>IMDB RATING</h3>
              <div className="score">{movieRating}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movieDirectors.length > 1 ? "S" : ""}</h3>
              {movieDirectors.map((element) => (
                <p key={element.credit_id}>{element.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledMovieInfo>
  );
};

export default MovieInfo;
