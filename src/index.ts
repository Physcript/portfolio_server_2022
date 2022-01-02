

import express from 'express'
import cors from 'cors'
import router from './routes'
import { createServer } from 'http'
import config from './config'


const app = express()
const httpServer = createServer(app)

const corsOptions = {
  origin: true,
  credentials: true,
}


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))



// corspolicy
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','https://batino.netlify.app')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,PATCH,DELETE,GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-headers','X-Requested-With,Content-Type')
  res.setHeader('Access-Control-Allow-credentials','true')
  next()
})

// middleware

app.use((req,res,next) => {
  console.log(`METHOD: ${req.method} URL: ${req.url}`)
  next()
})

app.use('/api', router.mailRouter)


httpServer.listen(config.SERVER.port,() => {
  console.log(`SERVER: ${config.SERVER.host}:${config.SERVER.port}`)
})
