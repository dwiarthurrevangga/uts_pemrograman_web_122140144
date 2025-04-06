import React, { useState } from 'react';
import GameCard from './GameCard';
import SearchBar from './SearchBar';
import useGamesData from '../hooks/useGamesData';

function GameList() {
  const { games, loading, error } = useGamesData();
  const [filteredGames, setFilteredGames] = useState([]);

  React.useEffect(() => {
    setFilteredGames(games);
  }, [games]);

  const handleSearch = (query) => {
    const filtered = games.filter(game =>
      game.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  if (loading) return <p className="text-light-custom">Loading lists...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="game-title">Assassin's Creed Games</h2>
      <SearchBar onSearch={handleSearch} />

      {filteredGames.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          title={game.title}
          year={game.year}
          description={game.description}
        />
      ))}
    </div>
  );
}

export default GameList;
