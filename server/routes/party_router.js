const express= require('express');
const router=express.Router();
const{registerPartyController,getAllPartiesController,deletePartyController}=require('../controllers/party_controller')

    module.exports=()=>{
        
            router.post('/',registerPartyController); 

            router.get('/:party_id', (req, res)=>{
           return  res.send('I am gettiiing an Id');
            });

            router.get('/',getAllPartiesController);
            router.delete('/:party_id',deletePartyController);
return router;
        };