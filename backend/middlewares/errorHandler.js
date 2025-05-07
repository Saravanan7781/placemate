const errorHandler = (err,req,res,next)=>{
        const stausCode = err.statuscode;
        const status = stausCode?stausCode:500;
        switch(status){
            case 400:
                res.json({
                    title:"validation Failed",
                    message:err.message,
                    stackTrace:err.stack
                })
                 break;
            case 401:
                res.json({
                    title:"UnAuthorized",
                    message:err.message,
                    stackTrace:err.stack
                })
                break;
            case 403:
                res.json({
                    title:"Forbidden",
                    message:err.message,
                    stackTrace:err.stack
                })
                break;
            case 404:
                res.json({
                    title:"Page Not Found",
                    message:err.message,
                    stackTrace:err.stack
                })
                break;
            case 500:
                res.json(
                    {
                        title:"Internel server error",
                        message:err.message,
                        stackTrace:err.stack
                    }
                )
            default:
                console.log("No error all good");
                break;
        }
}
module.exports=errorHandler;