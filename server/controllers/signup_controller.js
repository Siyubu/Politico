const {signingUpUserModel,signingInUserModel,unsuscribeModel}=require('../models/signup_model');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config')

const signingUpUserController=(req,res,next)=>{
    //console.log('********************** In Controller')
    const id=req.body.id;
    const names=req.body.names;
    const email=req.body.email;
    const hashedPassword1 = bcrypt.hashSync(req.body.password1, 8);
    const hashedPassword2 = bcrypt.hashSync(req.body.password2, 8);
    console.log('********************** '+hashedPassword1);
    console.log('++++++++++++++++++++++ '+hashedPassword2);
    const result=signingUpUserModel(id,names,email,hashedPassword1);
    result.then(data=>{
        //  var token = jwt.sign({ id: User.id }, config.secret, {
        //     expiresIn: 86400 // expires in 24 hours
        //   });
        res.status(200);
        res.json({
            status:'integer',
            id: req.body.id,
            name: req.body.names            
        })
        console.log('********************** '+ req.body.password1)
    })
    .catch(err=>{
        res.status(400).json(err);

    })
}
const signingInUserController=(req,res,next)=>{
    const names=req.body.names;
    console.log("!!!!!!!!!!!!!!!!!!!!! "+ req.body.password)
    const result=signingInUserModel(names);
  
     result.then(data=>{
        if(data.length==0){
         return  res.status(400).json("Cannot find user");
        }
        try{
            var dt=[];
           data.forEach(datum=>{
                if(bcrypt.compareSync(req.body.password,datum.password)){
                    answer="success";
                    const user={id: datum.id};
                    var token=generate_token(user);

                    const refleshToken= jwt.sign(user,config.reflesh)
                    //  var token = jwt.sign(user, config.secret, {
                    //   expiresIn: 86400 // expires in 24 hours
                    //    });
                console.log("ttt "+ token);
                var obj = {};
                obj["id"]=datum.id;
                obj["names"]=datum.names;
                obj["password"]=datum.password;
                obj["token"]=token;
                obj["reflesh"]=refleshToken;
                dt.push(obj);
                    
                }
                else{
                    answer="not Allowed";
                }
                  
            });
            console.log(dt);
           res.status(200)
          .json({
            status:'integer',
            data: dt            
       }) 
        }
       
        catch{
            res.status(500).send("We got an error");
        }  
     
    })
    .catch(err=>{
        res.status(540).json(err);
    })

}
const generate_token=(user)=>{
    return jwt.sign(user, config.secret, {
        expiresIn: 15 //86400 // expires in 24 hours
         });

}
const unsuscribeController=(req,res,next)=>{
    const names=req.body.names;
    const result=unsuscribeModel(names);
    result.then(data=>{
        res.status(200).send("succesfully unscribed")
    })
    .catch(err=>{
        res.status(500).send(err);
    })

}
const BasicAuth=(req,res,next)=>{
    const names=req.body.names;
    const result=signingInUserModel(names);
     result.then(data=>{
        if(data.length==0){
         return  res.status(400).json("you have first to log in");
        }
    });
 next();
}

exports.signingUpUserController=signingUpUserController;
exports.signingInUserController=signingInUserController;
exports.unsuscribeController=unsuscribeController;
