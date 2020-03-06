import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/main_components/index'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
