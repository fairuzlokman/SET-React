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
            <span style={{backgroundColor: "transparent", color: "#8c9297"}} class="material-symbols-outlined">search</span>
            <input id="searchInput" type="text" placeholder="Search Google or type a URL" />
        </div>
        <Navigation />
      </div>
    )
  }