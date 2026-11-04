const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>hellow this is nodejs project using jenkins** </h1>')
            <h2>Version: 1.0.0</h2>
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
