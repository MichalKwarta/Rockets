import './App.css';
import SearchBar from './components/SearchBar';
import ListLaunches from './components/ListLaunches';
function App() {
  return (
    <div className="App">
      <nav>
        <h1>Dummy navbar</h1>
      </nav>
      <main>
      <SearchBar/>
      <ListLaunches/>

      </main>
    </div>
  );
}

export default App;
