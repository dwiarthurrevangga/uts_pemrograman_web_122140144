import React from 'react';
import { useParams, Link } from 'react-router-dom';
import gamesData from '../data/games.json';

function GameDetail() {
  const { id } = useParams();
  const game = gamesData.find(g => g.id === parseInt(id));

  if (!game) {
    return (
      <div className="container mt-4">
        <h2>Game tidak ditemukan</h2>
        <Link to="/" className="btn btn-danger mt-3">Kembali</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>{game.title} ({game.year})</h2>
      <p>{game.description}</p>
      <Link to="/" className="btn btn-secondary mt-3">Kembali ke daftar</Link>
    </div>
  );
}

export default GameDetail;
