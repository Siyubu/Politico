const {registerPartyModel,getPartyByIdModel,getAllPartiesModel,deletePartyModel}=require('../models/party_model');


const registerPartyController=(req,res,next)=>{
   const  id= parseInt(req.body.id);
   const name=req.body.name;
   const hdAddress=req.body.hqaddress;
   const logo=req.body.logourl;
const result= registerPartyModel(id,name,hdAddress,logo);

result.then(data=>
    {res.status(200)
    .json({
      status: 'Integer',
      id: req.body.id,
      name: req.body.name
    });
})
.catch(err=>{
 next(err);
})
}
const getPartyByIdController=(req,res,next)=>{
const id=parseInt(req.params.party_id);
  const result=getPartyByIdModel(id);
  result.then(()=>{
    res.status(200);
    res.render





  })
}




  const getAllPartiesController=(req,res,next)=>{
    const result=getAllPartiesModel();
    result.then((data)=>{
      res.status(200);
        res.json({
        status: 'Integer',
        data: data
      })
      //res.render('../ui/html/pages/politico_Admin_create_party.ejs',{parties:data})
    })
    .catch((err)=>{
      res.status(400).json(err);
      return next(err);
    })
 
  }

const deletePartyController=(req,res,next)=>{
  const  id= parseInt(req.params.party_id);
  const result=deletePartyModel(id);
  result.then((data)=>{
    res.status(200).json({
      status: 'Integer',
      data: data.rows,
      message: 'succesfuly deleted'
    })

  })
  .catch(err=>{
    console.log(err);
    console.log(err.body);
    console.log(err.data);
    return next(err);
  })
}
exports.registerPartyController=registerPartyController;
exports.getAllPartiesController=getAllPartiesController;
exports.deletePartyController=deletePartyController;