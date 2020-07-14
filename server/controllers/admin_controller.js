const {signingInUserModel}=require('../models/signup_model')
//POST /office/<office-id>/register
//has to be in Admin 
const isAdmin=(req,res,next)=>{
    const names=req.body.names;
    const result=signingInUserModel(names);
    result.then(data=>{
        console.log('$$$$$$$$$$$$$$$$$$$ '+data[0]);
        if(data.length==0)
        {
            res.send('You need Admin to be registered');
        }
        
        if(data[0].isAdmin!=true){
            res.status(401).send("You are not allowed");
        }
    })
    next();
}
exports.isAdmin=isAdmin;