const express = require('express')
const app = express()
const port = 3030

const jsondata = require('./model_bangli.json')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/v1/api/bali/weather', (req, res) => {
  res.json(jsondata)
})

app.post('/v1/data', (req, res) => {
  try {
    console.log(req.body.name)
    res.send(req.body.name)
  } catch (error) {
    res.json("faile")
  }
})

app.listen(port, () => {
  console.log(`app listening at port: ${port}`)
})