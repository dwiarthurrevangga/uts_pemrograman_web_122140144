import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function GameCard({ id, title, year, description }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title} ({year})</h5>
        <p className="card-text">{description}</p>
        <Link to={`/games/${id}`} className="btn btn-outline-primary">Lihat Detail</Link>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default GameCard;
