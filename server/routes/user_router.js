const express= require('express');
const router=express.Router();
const {signingUpUserController,signingInUserController,unsuscribeController}=require('../controllers/signup_controller')


    module.exports=()=>{
        router.post('/signup',signingUpUserController);
        router.post('/login',signingInUserController);
        router.delete('/',unsuscribeController);
        router.get('/sos', (req, res)=>{
            //res.sendfile(path.join(__dirname,"./ui/html/index.html"))
            return res.send('Iam in the User router');
            });  
return router;
        };