const pg = require('pg');
const connectionString2 = process.env.DATABASE_URL ||'postgres://cprhbpkl:2cbFdUdX8iPQGZ7-IDwf23NWQ41gBsxy@drona.db.elephantsql.com:5432/cprhbpkl?ssl=true';
const client = new pg.Client(connectionString2);
client.connect()


const registerCandidateModel = (id, office, party, candidate) =>{
    console.log('reaching model');
 
    client.query('INSERT INTO public."Candidate"(id, office, party, candidate)VALUES($1, $2, $3, $4)',
        [id, office, party, candidate], (err, res) => {
            if (err) {
                console.log(err.stack)
            } else {
                console.log('model data saved successfully');
            }
        })
        return "data successful saved 200";
}


const deleteCandidateModel=(id)=>{
 client.query('DELETE FROM public."Candidate" WHERE id =($1)',
     [id], (err,res) => {
       
        if (err) {
            console.log(err.stack)
        } else {
            console.log('data deleted successfully from Model');
        }
 })
 return "data deleted successful saved 200";
}



const getCandidateDetailModel=async(id)=>{
        const query = await client.query(`SELECT id,office,party,candidate FROM public."Candidate" WHERE id=${id}`)
       
    return query.rows[0];
}



const getCandidateModel=(id)=>{

return new Promise((resolve, reject)=>{
client.query(`SELECT id,office,party,candidate FROM public."Candidate" WHERE id=${id}`)
.then(res=>{
    console.log('Query executed');
    if(res.rows[0]!=null) 
    {
        resolve(res.rows[0]);
   }
  
    else
    {
       resolve("No such Id in Database")
    }
})
.catch(err=>{
    console.log('Error occurred', err);
    reject(err)
    
});
});

}

exports.registerCandidateModel = registerCandidateModel;
exports.deleteCandidateModel = deleteCandidateModel;
exports.getCandidateDetailModel = getCandidateDetailModel;


exports.getCandidateModel=getCandidateModel;