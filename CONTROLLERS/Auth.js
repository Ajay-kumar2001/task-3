let  Auth=(req,res)=>{
    try{
res.status(200).send("succeseful authentistrd")
    }catch(er){
        res.status(400).send(er)
    }

}
module.exports=Auth