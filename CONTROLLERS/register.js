let users=require("../MODEL/users")
let bcrypt=require("bcrypt")
let register=async(req,res)=>{
    try{
        let data=req.body
        console.log(data)
   let {name,email,password,conformpassword} =req.body
           // checking whether all field values are entered or not
   if (name&&email&&password&&conformpassword&&(password===conformpassword)){ 
    // encoding the password
       let pwd=await bcrypt.hash(password,10)
       let conPwd=await bcrypt.hash(conformpassword,10)
    userDetail={...data,"password":pwd,"conformpassword":conPwd}
    // storing the user data in to database 
         let usredata=await new  users(userDetail)
         usredata.save()
       res.status(200).json({"massage":"registration succesful"})
   }
   else{
    res.status(400).json({"massage":"please enter the valid credentials"})
   }
    }catch(er){
        res.status(400).send(er)
    }
}
module.exports=register