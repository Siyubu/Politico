const pg = require('pg');
const connectionString2 = process.env.DATABASE_URL ||'postgres://cprhbpkl:2cbFdUdX8iPQGZ7-IDwf23NWQ41gBsxy@drona.db.elephantsql.com:5432/cprhbpkl?ssl=true';
const client=new pg.Client(connectionString2);
client.connect();

const registerPartyModel=(id,name, hqaddress, logourl)=>{
   return  new Promise((resolve,reject)=>{
    return  client.query('INSERT INTO public."Party"(id, name, hqAddress, logoUrl) VALUES($1, $2, $3, $4)',[id,name,hqaddress,logourl])
        .then(res=>{
            resolve(res.rows[0]);
        })
        .catch((err) => {
            reject(err);
          });
    })
}
const getPartyByIdModel=(id)=>{
    return new Promise((resolve,reject)=>{
        client.query(`SELECT * FROM public."Party" WHERE id=${id}`)
        .then((data)=>{
            resolve(data.rows[0]);
        })
        .catch((err)=>{
            reject(err);
        })
  
    })
}
const getAllPartiesModel=()=>{
    return new Promise((resolve,reject)=>{
        client.query(`SELECT * FROM public."Party"`)
        .then((data)=>{
            resolve(data.rows);
        })
        .catch((err)=>{
            reject(err);

        })
    })
}
const deletePartyModel=(id)=>{
    console.log("in Model, id = "+ id)
    return new Promise((resolve,reject)=>{
        client.query(`DELETE FROM public."Party" WHERE id=${id}`)
        .then(res=>{
            resolve(res);
        })
        .catch(err=>{
            reject(err);
        })
    })
}
exports.registerPartyModel= registerPartyModel;
exports.getPartyByIdModel=getPartyByIdModel;
exports.getAllPartiesModel=getAllPartiesModel;
exports.deletePartyModel=deletePartyModel;