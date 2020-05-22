const express= require('express');
const router=express.Router();


    module.exports=()=>{
        router.get('/', (req, res, next)=>{
            //res.sendfile(path.join(__dirname,"./ui/html/index.html"))
            //middleware
            console.log(`Request from :${req.originalUrl}`)
            console.log(`Request type:${req.method}`)
            next();
            return  res.send('I am in the Office router');
            });
            
            router.post('/', (req, res)=>{
                //res.sendfile(path.join(__dirname,"./ui/html/index.html"))
                return  res.send('the Office router Posted');
                }); 
             
return router;
        };