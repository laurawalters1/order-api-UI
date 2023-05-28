import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <div className="content position-absolute top-0 h-100 w-100">
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
