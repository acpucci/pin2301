import './App.scss';
import React from 'react';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Products from './Views/Products/Products';
import Services from './Views/Services/Services';
import Contact from './Views/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Products />
      <Services />
      <Contact />
    </div>
  );
}

export default App;