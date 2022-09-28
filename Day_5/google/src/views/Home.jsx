import { Navigation } from "../components/Navigation"
import TextField from '@mui/material/TextField';

export const Home = () => {
    return (
      <div className="Homepage">
        <div className="Top">
            <p style={{
                fontSize: "100px"
            }}>Google</p>
        </div>
        <div id="searchBar">
            <span class="material-symbols-outlined">search</span>
            <input id="searchInput" type="text"  />
        </div>
        <Navigation />
      </div>
    )
  }