import React from 'react';
import styles from './App.module.css';
import Splashpage from "./components/Splashpage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './components/About'
import Blog from './components/Blog'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className={styles.fullscreen}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splashpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
