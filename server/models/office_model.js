const pg=require("pg");
const connectionString2 = process.env.DATABASE_URL ||'postgres://cprhbpkl:2cbFdUdX8iPQGZ7-IDwf23NWQ41gBsxy@drona.db.elephantsql.com:5432/cprhbpkl?ssl=true';
const client=new pg.Client(connectionString2);
client.connect();

//POST /offices
const registerOfficeModel=(id,type,name)=>{
   return client.query('INSERT INTO  public."Office"(id,type,name) VALUES ($1,$2,$3)',[id,type,name])
    .then(res=>{
        res.rows[0];
    })  
}


//GET /offices
const getAllOfficesModel=()=>{
    return new Promise((resolve, reject)=>{
     client.query('SELECT* FROM public."Office"')
        .then(result=>{
           resolve(result.rows) ;
        })
        

    })
}


//GET /offices/<office-id>
const getOfficebyIdModel=(id)=>{
return new Promise((resolve,reject)=>{
    client.query('SELECT* FROM public."Office" where id= $1',[id])
    .then(res=>{
       resolve(res.rows[0]) 
    })
})

}
exports.registerOfficeModel=registerOfficeModel;
exports.getAllOfficesModel=getAllOfficesModel;
exports.getOfficebyIdModel=getOfficebyIdModel;