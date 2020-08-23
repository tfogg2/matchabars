import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ReactDOM from "react-dom"
import "./App.css"
import Home from "./components/Home"
import Axios from "axios"
Axios.defaults.baseUrl = process.env.BACKENDURL || ""

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
