
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop';
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
