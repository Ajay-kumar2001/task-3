let users=require("../MODEL/users")
let getreq =async(req,res)=>{
    try{
            //getting the data  from the data Base 
        let allUsers= await users.find()
            //  checking  if data is present or not
        if (!allUsers.length){
            res.status(404).json({"message":"data not found"})
        }
        else{
               //sending the data as response in  the form of json format

        res.status(200).json(allUsers)
        }
    }catch(re){
        re.send(er)
    }

}
module.exports=getreq