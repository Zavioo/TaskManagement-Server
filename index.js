// steps to defin express server 
// Loads .env file contents into process.env file
require ('dotenv').config()
const express = require ('express')
const cors = require ('cors')
const router = require('./routes/router')   
const TmServer = express() 
require('./database/dbConnection')

TmServer.use(cors())
TmServer.use(express.json())
TmServer.use(router)



const PORT= 3000 || process.env.PORT

TmServer.listen(PORT,()=>{
    console.log(`TmServer in running on the ${PORT} and wating for client request!!!`);
    
})

//resloving get request to http://localhost:3000/
TmServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red;">TmServer Stareted at port and waiting for client request !!!</h1>`)
})
