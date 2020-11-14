import { useState, useEffect, useCallback } from "react";
import { API_KEY, API_URL } from "../../config";

export const useMovieFetch = (movieID) => {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      setLoading(true);
      const endpoint = `${API_URL}movie/${movieID}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();

      const creditsEndpoint = `${API_URL}movie/${movieID}/credits?api_key=${API_KEY}`;

      const creditsResult = await (await fetch(creditsEndpoint)).json();
      console.log("Credits result: ", creditsResult);
      const directors = creditsResult.crew.filter(
        (member) => member.job === "Director"
      );
      setMovieData({
        ...result,
        actors: creditsResult.cast,
        directors: directors,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [movieID]); //has depency array so this function only changes when the movieID changes, this is what useCallBack is for so we can
  //have a dependency to depend on, if we didn't have the useCallback, we couldn't have added that dependency

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [movieData, loading, error];
};
