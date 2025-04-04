import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import SearchBar from './SearchBar';
import gamesData from '../data/games.json';

function GameList() {
  const [games, setGames] = useState(gamesData);
  const [filteredGames, setFilteredGames] = useState(gamesData);

  const handleSearch = (query) => {
    const filtered = games.filter(game =>
      game.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-danger">Assassin's Creed Games</h2>
      
      <SearchBar onSearch={handleSearch} />

      {filteredGames.map((game) => (
        <GameCard
          key={game.id}
          id={game.id} // 👈 ditambahkan supaya bisa dipakai di routing
          title={game.title}
          year={game.year}
          description={game.description}
        />
      ))}
    </div>
  );
}

export default GameList;
