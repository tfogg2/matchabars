import React from "react"
import logo from "./logo.svg"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
