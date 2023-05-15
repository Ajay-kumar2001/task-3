let users=require("../MODEL/users")
let getReqById= async(req,res)=>{
    try{
            //getting the paticular documet with the help of id
            const user= await users.findById(req.params.id)
           if (!user){
            res.status(404).send({"massage":"data not fount"})
           } 
           else{
            res.status(200).json(user)
           }  
          
    }catch(er){
        res.status(500).send(er)
    }
}
module.exports=getReqById