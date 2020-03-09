import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/main_components/index'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/appRoutes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <AppRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
