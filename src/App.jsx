import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => <h1>Hats Page</h1>

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </BrowserRouter>
    </div>
  )
}

export default App
