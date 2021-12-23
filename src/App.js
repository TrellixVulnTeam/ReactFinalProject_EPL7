import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import TVShows from './components/TVShows';
import MovieDetailed from './components/MovieDetailed';
import { useMemo, useState } from 'react';
import LoginPage from './components/LoginPage';
import isLoggedInContext from './context/IsLoginContext';

function App() {
  const [selectedMovie, setSelectedMovie] = useState();
  const [isLogged, setLogged] = useState(false);
  const value = useMemo(() => ({isLogged, setLogged}), [isLogged]);
  return (
    <Router>
      <div className="App">
      <isLoggedInContext.Provider value={value}>
        <Header value = {value}/>
      </isLoggedInContext.Provider>

        <Routes>
            <Route path='' element={<Home />}></Route>
            <Route path="/movies" element={<MoviesList setSelectedMovie = {setSelectedMovie}/>}>
            </Route>
            <Route path="/movies/:movie" element={<MovieDetailed movie = {selectedMovie}/>}/>
            <Route path="/tvshows" element={<TVShows/>}></Route>
            <Route path="/login" element={!isLogged ? <LoginPage isLogged = {isLogged} setLogged = {setLogged}/> : <Home isLogged = {isLogged}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
