const express= require('express');
const router=express.Router();
const {registerOfficeController,getAllOfficesController,getOfficebyIdController}=require('../controllers/office_controller')


    module.exports=()=>{
        router.get('/',getAllOfficesController);
        router.get('/:office_id',getOfficebyIdController);
            
            router.post('/', registerOfficeController); 
             
return router;
        };
           //res.sendfile(path.join(__dirname,"./ui/html/index.html"))
            //middleware