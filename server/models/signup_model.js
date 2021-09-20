const pg=require('pg');
const connection2= process.env.DATABASE_URL ||'postgres://cprhbpkl:2cbFdUdX8iPQGZ7-IDwf23NWQ41gBsxy@drona.db.elephantsql.com:5432/cprhbpkl?ssl=true';
const client=new pg.Client(connection2);
client.connect();

//POST /auth/signup
const signingUpUserModel=(id,names,email,pswd1)=>{
    return new Promise((resolve,reject)=>{
      return client.query('INSERT INTO public."User" (id,names,email,password) VALUES ($1,$2,$3,$4)',[id,names,email,pswd1])
        .then(res=>{
            console.log(res);
                resolve(res.rows[0]);  

        })
        .catch(err=>{
            reject(err);
        }); 

    })
  
}
//POST /auth/login
const signingInUserModel=(names)=>{
    return new Promise((resolve,reject)=>{
        console.log("In Model " + names)

        return client.query(`SELECT * FROM public."User" WHERE names='${names}'`)
        .then(data=>{
            console.log(data.rows)
            resolve(data.rows);
        })
        .catch(err=>{
            reject(err);
        })
    })
  
}
const unsuscribeModel=(names)=>{
    return new Promise((resolve,reject)=>{
        client.query(`DELETE FROM public."User" WHERE names='${names}'`)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err);
        })
    })
}
exports.signingUpUserModel=signingUpUserModel;
exports.signingInUserModel=signingInUserModel;
exports.unsuscribeModel=unsuscribeModel;