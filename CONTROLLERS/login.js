let users=require("../MODEL/users")
let bcrypt=require("bcrypt")
let jsonwebtoken=require("jsonwebtoken")
let login=async(req,res)=>{
    try{
        let {email,password,conformpassword}=req.body
        // checking whether all field values are entered or not
        if(email&&password&&conformpassword&&(password===conformpassword)){
            // checking whether the  user is present in dataBase or not
            let validUser=await users.findOne({email})
            // comparing the current  user  login password with  previously registered password
            let valid=await bcrypt.compare(password,validUser.password)
            if(valid){
                // token genaration
                let token=jsonwebtoken.sign({"email":email},"code")
                    // sending jwt token to the clint
                    res.status(200).json({"massage":"Login succesful","athantication":{"token":token}})
            }
            else{
                res.status(400).json({"massage":"Login faild"})
            }
   
        }
        else{
            res.status(400).json({"massage":"enter valid email and password"})
        }
    } catch(er){
        res.status(500).json(er)
    }

}
module.exports=login