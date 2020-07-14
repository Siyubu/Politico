const {deleteVoteModel}=require('../models/voter_model')

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
exports.deleteVoteController=deleteVoteController;