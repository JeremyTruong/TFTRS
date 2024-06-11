import './App.css';
import { React } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from './components/MainPage';
import ComparisonPage from './components/ComparisonPage';

function App() {
  return (<div style={{backgroundColor: "#F3F3F3", width: "100vw", minHeight: "100vh"}}>
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage></MainPage>} />
              <Route path="/comparator" element={<ComparisonPage></ComparisonPage>} />
            </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;