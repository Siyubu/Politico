const express= require('express');
const router=express.Router();
const {registerOfficeController,getAllOfficesController,getOfficebyIdController}=require('../controllers/office_controller')
const {isAdmin}=require('../controllers/admin_controller');

    module.exports=()=>{
        router.get('/',getAllOfficesController);
        router.get('/:office_id',getOfficebyIdController);
        router.post('/', registerOfficeController);
         router.post('/:office_id/register',isAdmin,registerOfficeController);// registerOfficeController is not the
        //right function, I have to build the one that take composite primary key
             
return router;
        };
           //res.sendfile(path.join(__dirname,"./ui/html/index.html"))
            //middleware