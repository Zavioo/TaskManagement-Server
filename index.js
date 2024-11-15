// steps to defin express server 
// Loads .env file contents into process.env file
require ('dotenv').config()
const express = require ('express')
const cors = require ('cors')
const router = require('./routes/router')   
const pfServer = express() // starting the server pf server is the name of the server
require('./database/dbConnection')

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)



const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`pfServer in running on the ${PORT} and wating for client request!!!`);
    
})

//resloving get request to http://localhost:3000/

pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red;">pfserver Stareted at port and waiting for client request !!!</h1>`)
})
