// ...........................get.....................................

const gettodos = (req,res)=>{
    res.status(200).json({
        message :"get request"
    })
}
//.........................post..............................
const posttodos = (req,res)=>{
    res.status(200).json({
        message :"post request"
    })
}

//.........................put..............................
const puttodos = (req,res)=>{
    res.status(200).json({
        message :`put request for ${req.params.id}`
    })
}

//.........................delete..............................

const deletetotos = (req,res)=>{
    res.status(200).json({
        message :`delete id ${req.params.id}`
    })
}


module.exports = {
    gettodos,
    posttodos,
    puttodos,
    deletetotos
}