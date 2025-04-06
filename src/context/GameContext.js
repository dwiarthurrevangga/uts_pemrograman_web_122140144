import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://67f1305ec733555e24ac6980.mockapi.io/games')
      .then(response => {
        setGames(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Gagal mengambil data game');
        setLoading(false);
      });
  }, []);

  return (
    <GameContext.Provider value={{ games, loading, error }}>
      {children}
    </GameContext.Provider>
  );
};
