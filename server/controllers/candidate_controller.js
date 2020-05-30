
const{registerCandidateModel,deleteCandidateModel,getCandidateDetailModel,getCandidateModel}=require('../models/candidate_model');
//const getCandidateDetailModel = require('../models/candidate_model');



const registerCandidatesController= function(id, office, party, candidate){
    console.log('reaching controller');
   return  registerCandidateModel(id, office, party, candidate)
} 

  const deleteCandidateController=(id)=>{
    console.log('deletiiing in controller');
    return deleteCandidateModel(id);
  }


  const getCandidateDetailController= async (id)=>{
        const result=await getCandidateDetailModel(id);
        console.log("I am in Controller "+ result);
       return result;
  }


const getCandidateController=(req, res)=>{
  const candID = parseInt(req.params.id);
  
//   return new Promise((resolve, reject)=>
// {
  const resul= getCandidateModel(candID);
  
resul.then(data=>
  {res.status(200)
  .json({
    status: 'success',
    data:data ,
  });
 
})
.then(()=>{
  console.log("ccccccccccccccc "+ fetch(resul));
})
.catch((err)=> {
console.log(err);
  return (err);
});
// });

}




 
exports.registerCandidatesController=registerCandidatesController;
exports.deleteCandidateController = deleteCandidateController;
exports.getCandidateDetailController = getCandidateDetailController;

exports. getCandidateController= getCandidateController;













