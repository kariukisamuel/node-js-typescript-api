import express from 'express'
import config from 'config'
import  connect from './utils/connect'
import routes from './utils/routes'

const app = express()
const port = config.get < number > ('port')

app.listen(port, async () => {
  console.log('listening on port 8080')
  await connect()

  routes(app)
})