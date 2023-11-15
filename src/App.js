import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import MoviesDashBoard from "./Components/MoviesDashBoard";
import FilmsDashBoard from "./Components/FilmsDashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* master Pages */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/Movies" element={<MoviesDashBoard />} />
        <Route path="/Films" element={<FilmsDashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
