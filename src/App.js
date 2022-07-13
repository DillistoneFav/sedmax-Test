import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Header/Navbar/Navbar";
import { routes } from "./components/Router/router";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            {routes.map(item => 
                <Route path={item.path} element={<item.component/>} exact={item.exact} key={item.path}></Route>
            )}
                <Route path="*" element={<Navigate to="/error" replace />}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
