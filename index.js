const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('<h1>2.0.0 Lived - Node js application <br> using nexus </h1>')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
