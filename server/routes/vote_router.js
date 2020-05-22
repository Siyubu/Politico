const express= require('express');
const router=express.Router();


    module.exports=()=>{
        router.get('/', (req, res)=>{
            //res.sendfile(path.join(__dirname,"./ui/html/index.html"))
             res.send('Iam in the Vote router');
            });  
return router;
        };