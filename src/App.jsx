import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/dashboard/HomePage";
import "./style/App.css";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/home" Component={HomePage} />
          <Route path="*" Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
