import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import MainPage from "./MainPage";

export default function App() {
  return (
    <Router>
      <div className="w-100 sticky top-0">
        <Navbar />
      </div>
      <div className="w-100">
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}
