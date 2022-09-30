import { Navigation } from "../components/Navigation"
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div id="Google">
          <p style={{fontSize: "100px"}}>
            Google
          </p>
          <div id="searchBar">
              <span style={{backgroundColor: "transparent", color: "#8c9297"}} class="material-symbols-outlined">search</span>
              <input id="searchInput" type="text" placeholder="Search Google or type a URL" />
          </div>
    </div>
      // <div className="Homepage">
      //   <div className='TopBar'>
      //   </div>

      //   <div id="Google">
      //     <p style={{fontSize: "100px"}}>
      //       Google
      //     </p>
      //     <div id="searchBar">
      //         <span style={{backgroundColor: "transparent", color: "#8c9297"}} class="material-symbols-outlined">search</span>
      //         <input id="searchInput" type="text" placeholder="Search Google or type a URL" />
      //     </div>
      //   </div>

      //   <Navigation />
      // </div>
    )
  }