import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GameList from './components/GameList';
import Footer from './components/Footer';
import About from './pages/About';
import GameDetail from './pages/GameDetail';

// 🧠 Tambahkan ini
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <GameProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<GameList />} />
            <Route path="/about" element={<About />} />
            <Route path="/games/:id" element={<GameDetail />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </GameProvider>
  );
}

export default App;
