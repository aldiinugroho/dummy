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
    console.log({message: "success ", payload: req.body, date: new Date()})
    res.json({message: "success ", payload: req.body, date: new Date()})
  } catch (error) {
    console.log({message: "failed ", payload: req.body, date: new Date()})
    res.json({message: "failed ", date: new Date()})
  }
})

app.listen(port, () => {
  console.log(`app listening at port: ${port}`)
})