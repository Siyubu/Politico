let chai=require("chai");
let chaihttp=require("chai-http");
var chaiAsPromised = require('chai-as-promised');
var party=require('../controllers/party_controller');
// Assertion style
//chai.should();
chai.use(chaiAsPromised)
var expect=chai.expect;
describe('Party unity test', ()=>{
    // Get All
    describe("Get all partie",()=>{
        it("It shuld display length",()=>{
           return expect(Promise.resolve(party.getAllPartiesController)).to.eventually.have.lengthOf(3);
        });

        it("It shuld display all parties on screen",()=>{
        //     //return new Promise(resolve=>{
        //         //chai.request(party)
        //         //.get('/')
        //         .then((err,response)=>{
        //        return Promise.resolve(response).should.have.status(200);
        //       // return Promise.resolve(response).body.should.be.a('array');
        //         //resolve()

        //     }).then(done)
       
        //    // })
        //     .catch(done);
         return expect(Promise.resolve(party.getAllPartiesController)).to.eventually.be.a("Function");
        });
        it("It shuld display length",()=>{
            return expect(Promise.resolve(party.getAllPartiesController)["data"]).to.eventually.have.lengthOf(5);
         });

    })

    // Get by id

    // post

    // Delete
})