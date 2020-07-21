const {deleteVoteModel,registerVoteModel}=require('../models/voter_model')

const deleteVoteController=(req,res,next)=>{
    const id=req.body.id;
    const result=deleteVoteModel(id);
    result.then(data=>{
        res.status(200).send('Succesfully deleted');
    })
    .catch(err=>{
        res.status(500).send(err);
    })
}

const registerVoteController=(req,res,next)=>{
    const id=req.body.id;
    const createdOn=req.body.createdOn;
    const createdBy=req.body.createdBy;
    const office=req.body.office;
    const candidate=req.body.candidate;
    const result=registerVoteModel(id,createdOn,createdBy,office,candidate)
    result.then(data=>{
        res.status(200)
        .json({
            status: 'Integer',
            data : {
                office : req.body.office , // office unique id
                candidate : req.body.candidate, // politician unique id
                voter : req.body.id // voter unique id
                }
        })
    })
}
exports.deleteVoteController=deleteVoteController;
exports.registerVoteController=registerVoteController;