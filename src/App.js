import Home from "./pages/home/Home";
import Favourite from "./pages/favourite/Favourite"
import Single from "./pages/single/Single";
import TopBar from "./topbar/TopBar";
import React from "react";
import { Routes,BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
      <Route path = '/' element= {<Home /> }></Route>
      <Route path = '/post/:postId' element={<Single/>}></Route>
      <Route path = '/favourites' element= {<Favourite/> }></Route>
      </Routes>
    </Router>
    
  );
}
export default App;
