import { useState, useEffect } from 'react';

const useGamesData = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://67f1305ec733555e24ac6980.mockapi.io/games')
      .then(res => res.json())
      .then(data => {
        setGames(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  return { games, loading, error };
};

export default useGamesData;
