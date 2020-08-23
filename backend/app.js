const express = require("express")
const cors = require("cors")
const path = require("path")
require("dotenv").config()

const app = express()

app.use(express.static(path.join(__dirname, "build")))
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`))
