const express= require('express');
const router=express.Router();
const {registerCandidatesController,deleteCandidateController, getCandidateDetailController, getCandidateController} = require('../controllers/candidate_controller');
//const test = require('../../ui/html/')
//const getCandidateDetailController = require('../controllers/candidate_controller');

    module.exports=()=>{
        // router.get('/', async(req, res,next)=>{
        //     //res.sendfile(path.join(__dirname,"./ui/html/index.html")) 
        //     console.log("I am in Router "+ req.body.id);
        //     const details= await getCandidateDetailController(req.body.id);
        //     return res.status(200).json(details);
        // });


        router.get('/addcand',(req,res)=>{
            
           res.render('../ui/html/pages/politico_Admin_create_gvmt_office.ejs')
   
        });

//post method
router.post('/', (req, res,next)=>{
    try{
        console.log("office " + req.body.id);
        registerCandidatesController(req.body.id, req.body.office, req.body.party, req.body.candidate);
       return res.status(200).send('Candidate is successfuly registered!!');
    }
    catch(err){
        return next(err);
    }
});
        
             
router.put('/:id', (req, res,next)=>{
    //res.sendfile(path.join(__dirname,"./ui/html/index.html"))
    try{
        // res.render('../ui/html/pages/index.ejs',{pageTitle:'Tough Lady'})
        return  res.send('Put request in the  Candidate router is successful!');
     }
     catch(err){
         return next(err);
     }
    }); 

router.delete('/', (req, res)=>{
  deleteCandidateController(req.body.id);
  console.log(req.body.id + ' deletiiing in Router');
  return res.status(200).send('Candidate is successfuly deleted');
    }); 


     router.get('/:id', getCandidateController);

   
 
return router;
        };