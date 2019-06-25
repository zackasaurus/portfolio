import React from 'react';
import Header from './components/layout/Header'
import Home from './components/layout/Home'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="wrapper">
        <Home></Home>
        <Home></Home>
        <Home></Home>
      </div>

    </div>
  );
}

export default App;
