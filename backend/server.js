const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.port  ;

 const app = express()

app.use("/todo", require("./routes/todorouts") )


app.listen(port, () =>{
    console.log(`server running in ${port} `);
})

