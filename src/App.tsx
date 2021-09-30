import React from 'react';
import './App.css';
import Router from "./Router/Router";

function App() {
    const router = Router()
  return (
    <div className="App">
        {
            router
        }
    </div>
  );
}

export default App;
