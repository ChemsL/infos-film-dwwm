import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./Home/home";
import About from "./About/about";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
