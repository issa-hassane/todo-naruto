const express = require("express")
const router = express.Router()
const { gettodos,
    posttodos,
    puttodos,
    deletetotos} = require("../controlers/todocontrollers")

//..............................get request.........................
router.get("/", gettodos)

//..............................post request.........................
router.post("/",posttodos)

//..............................put request.........................
router.put("/:id", puttodos)

//..............................delete request.........................
router.delete("/:id", deletetotos)

module.exports = router;