import './App.css';
import SearchBar from './components/SearchBar';
import ListLaunches from './components/ListLaunches';
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LaunchDetails from './components/LaunchDetails';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>

      <nav>
        <h1>
          <Link to="/">
          Dummy navbar
            </Link>
            
        </h1>

      </nav>
      <main>
          <Routes>
            <Route path="/" element={<ListLaunches />} />
            <Route path=":id" element={<LaunchDetails  />} />
            <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
          </Routes>


        </main>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
