const express= require('express');
const router=express.Router();
const{registerPartyController,getAllPartiesController,deletePartyController,getPartyByIdController}=require('../controllers/party_controller')

    module.exports=()=>{
        
            router.post('/',registerPartyController); 
            router.get('/',getAllPartiesController);
            router.get('/:party_id', getPartyByIdController);
            router.delete('/:party_id',deletePartyController);
return router;
        };