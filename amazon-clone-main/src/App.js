import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import SignUp from './SignUp';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css";
import BasicDemo from './SignIn';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            <Route 
              path='/checkout' 
              element={
                <div>
                  <Header />
                  <Checkout />
                </div>
              } 
            />
            <Route 
              path='/SignIn' 
              element={
                <div>
                  <BasicDemo />
           
                </div>
              } 
            />
            <Route 
              path='/' 
              element={
                <div>
                  <Header />
                  <Home />
                </div>
              } 
            />
            
            <Route
              path='/sign-up' 
              element={
             
                <div>
            <SignUp />
             </div>
              } 
            />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
