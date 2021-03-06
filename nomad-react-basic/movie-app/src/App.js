import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Movie from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
