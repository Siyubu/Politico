const pg=require('pg');
const connection=process.env.DATABASE_URL||'postgres://cprhbpkl:2cbFdUdX8iPQGZ7-IDwf23NWQ41gBsxy@drona.db.elephantsql.com:5432/cprhbpkl?ssl=true';
const client=new pg.Client(connection);
client.connect();

// delete a vote
const deleteVoteModel=(id)=>{
    return new Promise((resolve, reject)=>{
        client.query(`DELETE FROM public."Vote" WHERE id=${id}`)
        .then(res=>{
            resolve(res.rows[0]);
        })
        .catch(err=>{
            reject(err);
        })
    })
}

const registerVoteModel=(id,createdOn,createdBy,office,candidate)=>{
    return new Promise((resolve,reject)=>{
        client.query(`INSERT FROM public."Vote" (id,createdOn,createdBy,office,candidate) VALUES(${id},${createdOn},${createdBy},${office},${candidate})`)
        .then(res=>{
            resolve(res.rows[0]);
        })
        .catch(err=>{
            reject(err);
        })
    })

}
exports.deleteVoteModel= deleteVoteModel;
exports.registerVoteModel=registerVoteModel;