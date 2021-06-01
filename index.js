const express = require('express')
const app = express()
const port = process.env.PORT || 3030

const jsondata = require('./model_bangli.json')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/v1/api/bali/weather', (req, res) => {
  res.json(jsondata)
})

app.post('/v1/data', (req, res) => {
  try {
    console.log(req.body)
    res.send(req.body)
  } catch (error) {
    res.json("failed")
  }
})

app.listen(port, () => {
  console.log(`app listening at port: ${port}`)
})