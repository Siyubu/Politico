const express= require('express');
const router=express.Router();

const {deleteVoteController,registerVoteController}=require('../controllers/voter_controller');


    module.exports=()=>{
        router.get('/', (req, res)=>{
            //res.sendfile(path.join(__dirname,"./ui/html/index.html"))
             res.send('Iam in the Vote router');
            });
            
            router.delete('/:id',deleteVoteController)
            router.post('/', registerVoteController)
return router;
        };