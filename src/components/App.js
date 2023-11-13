import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./Home/home";
import About from "./About/about";
import Search from './Search/search';
import List from './List/list';
import Film from "./Film/film";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/List/:search" element={<List />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
