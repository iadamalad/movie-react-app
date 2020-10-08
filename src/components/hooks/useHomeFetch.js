import { useState, useEffect } from "react";
import { POPULAR_ENDPOINT } from "../../config";

export function useHomeFetch() {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();
      // console.log(result);
      setState((prevState) => ({
        ...prevState,
        movies:
          isLoadMore !== -1
            ? [...prevState.movies, ...result.results]
            : [...result.results],
        heroImage: prevState.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(`${POPULAR_ENDPOINT}`);
  }, []);

  return [{ state, loading, error }, fetchMovies];
}
