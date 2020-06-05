const express= require('express');
const router=express.Router();
const officeRouter=require("./office_router");
const partyRouter= require("./party_router");
const petitionRouter=require("./petition_router");
const userRouter= require("./user_router");
const voteRouter= require("./vote_router");
const candidate=require("./candidate_route");

    module.exports=()=>{
        router.get('/', (req, res)=>{
             res.render('../ui/html/pages/index.ejs',{pageTitle:'Tough Lady'});
             //res.render('../ui/html/pages/politico_Admin_create_gvmt_office.ejs')
            }); 

            router.use('/offices',officeRouter());
            router.use('/parties',partyRouter());
            router.use('/Petition',petitionRouter());
            router.use('/User',userRouter());
            router.use('/Vote',voteRouter());
            router.use('/Candidate',candidate());
return router;
    };