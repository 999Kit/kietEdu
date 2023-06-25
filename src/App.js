import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import EduCard from "./EduCard";


const API_URL = "http://www.omdbapi.com?apikey=f4479da6";

function App() {
  const [edus, setEdus] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchEdu = async (term) => {
    try {
      const res = await fetch(`${API_URL}&s=${term}`);
      const data = await res.json();
      console.log(data);
      setEdus(data.Search);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    searchEdu("Spiderman"); // run when the page loads
  }, []);

  return (
    <div className="app">
      <nav>

      </nav>
      <div className="search">
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter" && searchTerm.length > 0) {
              searchEdu(searchTerm);
              e.target.blur();
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchEdu(searchTerm)}
        />
      </div>

      {edus.length > 0 ? (
        <div className="container">
          {edus.map((edu) => (
            <EduCard edu={edu} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No items found</h2>
        </div>
      )}

    </div>
  );
}

export default App;
