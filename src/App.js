import "./App.css";
import Skills from "./pages/Skills.js";
import Home from "./pages/home";
import NotFound from "./pages/404";
import MainNavigation from "./components/Navigation/MainNavigation";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="">
          <Route path="404-not-found" element={<NotFound />} />
          <Route path="skills" element={<Skills />} />
          <Route path="*" element={<Navigate to="404-not-found" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
