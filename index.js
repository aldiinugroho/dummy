const express = require('express')
const app = express()
const port = process.env.port || 3000

const jsondata = require('./test.json')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/v1/api/bali/weather', (req, res) => {
  res.json(jsondata)
})

app.listen(port, () => {
  console.log(`app listening at port: ${port}`)
})