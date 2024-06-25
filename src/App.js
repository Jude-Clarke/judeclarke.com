import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Routes>
            <Route
                path="/" element={<Home />}
            />
            <Route
                path="*" element={<Home />}
            />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;