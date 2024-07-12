import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Finder</h1>
      <div className="containerInput">
        <input 
          type="text"
          placeholder="Enter your zip code..."
        />
        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>
      <main className="main">
        <h2>CODE: 79003222</h2>
        <span>Test Street</span>
        <span>House number</span>
        <span>District</span>
        <span>City</span>
      </main>
    </div>
  );
}

export default App;
