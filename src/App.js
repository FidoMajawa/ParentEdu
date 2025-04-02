import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Feedback from "./pages/Feedback";
import Activities from "./pages/Activities";
import MainPage from "./pages/mainpage"; 
import Messages from "./pages/notifications";
import Compose from "./pages/compose";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/compose" element={<Compose />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </Router>
  );
}

export default App;
