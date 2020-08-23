import React, { useEffect } from "react"
import { createUseStyles } from "react-jss"
import { Link } from "react-router-dom"

const useStyles = createUseStyles(theme => ({
  home: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#275609",
    padding: "20px",
    textAlign: "center",
    color: "#fff",
    "& a": {
      color: "#fff",
      fontWeight: 900,
      textDecoration: "none"
    },
    "& h1": {
      fontWeight: 300,
      fontSize: "42px",
      "& bold": {
        fontWeight: 900
      }
    }
  }
}))

function ComponentName() {
  const classes = useStyles()
  return (
    <div className={classes.home}>
      <h1>
        <bold>Matchabars.com</bold> is for sale.
      </h1>
      <p>
        Visit{" "}
        <a href="https://www.godaddy.com/domainsearch/find?checkAvail=1&isc=gdbbx962&domainToCheck=matchabars.com" target="_blank">
          GoDaddy
        </a>{" "}
        to buy it today!
      </p>
    </div>
  )
}

export default ComponentName
