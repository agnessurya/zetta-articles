const errorHandler = (err,req,res,next)=>{
    let code = 500
    let errMessage = `Internal Server Error`

    switch (err.name) {
        case "BSONTypeError" :
            code = 404
            errMessage = "Data Not Found"
            break;

        case "DataNotFound":
                code = 404
                errMessage = "Data Not Found"
                break;

        default:
            break;
    }

    res.status(code).json({ message: errMessage })
}

  module.exports = errorHandler