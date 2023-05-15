const users=require("../MODEL/users")
let patchReq= async(req,res)=>{
    try{
    console.log("id",req.params.id)
    // updating the paticular  data with the help of id
    let user=await users.findById(req.params.id)
    // checking  whether that paticulat   document is present or not
    if(!user){
        res.status(404).json({"massage":"user not found"})
    }
    else{
        user.name=req.body.name
        user.password=req.body.password
        await user.save()

    res.status(200).send("updeted")

    }
    }catch(er){
    res.status(500).json(er)
}
}
module.exports=patchReq