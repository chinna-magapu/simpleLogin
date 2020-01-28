import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import AppRouter from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}
export default App;
