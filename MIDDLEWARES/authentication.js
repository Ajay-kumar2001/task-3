let jwt=require("jsonwebtoken")
let authentication=(req,res,next)=>{
    let token=req.header('auth')
    try
    {
        if(token)
        {
        let valid=jwt.verify(token,"code")
        console.log(valid)
        next()
        }
    } catch(er)
    {
        return res.status(400).send(er.massage);
    }
    

}
module.exports=authentication