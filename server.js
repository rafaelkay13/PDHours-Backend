const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes')
const PORT = process.env.PORT || 3001

app = express()
 app.use(cors())
 app.use(bodyParser.urlencoded({extended: true}))
 app.use(bodyParser.json())
 app.use('/', routes)

 app.listen(PORT, () => {
     console.log('Servidor Funcionando!');
 })

