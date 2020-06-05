const{registerOfficeModel,getAllOfficesModel,getOfficebyIdModel}=require('../models/office_model');
//register or post
const registerOfficeController=(req,res)=>{  
   const id= req.body.id;
   const type= req.body.type;
   const name= req.body.name;
   const result=registerOfficeModel(id,type,name);
   result.then(data=>{
       res.status(200),
       res.json({
        status: 'Integer',
        id: req.body.id,
        name: req.body.name,
        data:data
       })
   })
   .catch(err=>{
       res.status(400).json(err);

   })
}
//get all offices
   const getAllOfficesController=(req, res)=>{
    const result=getAllOfficesModel();
    result.then((data)=>{
        res.status(200);
        res.json({
            status: 'Integer',
           data: data
        })
    })
    .catch(err=>{
        res.status(400).json(err);
    })
   }

   const getOfficebyIdController=(req,res)=>{
    getOfficebyIdModel(req.params.office_id)
    .then(data=>{
        res.status(200);
        res.json({
            status:'Integer',
            data:data
        })
    })
    .catch(err=>{
     res.status(400);
     res.json(err);
    })
   }


exports.registerOfficeController=registerOfficeController;
exports. getAllOfficesController= getAllOfficesController;
exports.getOfficebyIdController=getOfficebyIdController;