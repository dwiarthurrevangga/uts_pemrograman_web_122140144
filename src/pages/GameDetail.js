import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GameContext } from '../context/GameContext';

function GameDetail() {
  const { id } = useParams();
  const { games, loading, error } = useContext(GameContext);

  if (loading) return <div className="container mt-4 text-light-custom">Loading...</div>;
  if (error) return <div className="container mt-4 text-light-custom">Error: {error}</div>;

  const game = games.find(g => g.id === Number(id));

  if (!game) {
    return (
      <div className="container mt-4">
        <h2 className="text-light-custom">Game tidak ditemukan</h2>
        <Link to="/" className="btn btn-danger mt-3">Kembali</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4 game-detail-card">
      <h2>{game.title} ({game.year})</h2>
      <p>{game.description}</p>
      <Link to="/" className="btn btn-secondary mt-3">Kembali ke daftar</Link>
    </div>
  );
}

export default GameDetail;
