const pg = require('pg');
// const connectionString = process.env.DATABASE_URL ||'postgres://jvnunenmsixtda:fd050031169d5d2adc01d0c0f191a73c8b67a7a9eafbeca96f697
// 3a052e45fcb@ec2-50 - 19 - 232 - 205.compute - 1.amazonaws.com: 5432 / d3o1u74nfnh9jm ?

const connectionString2 = process.env.DATABASE_URL ||'postgres://cprhbpkl:2cbFdUdX8iPQGZ7-IDwf23NWQ41gBsxy@drona.db.elephantsql.com:5432/cprhbpk';
const client = new pg.Client(connectionString2);
client.connect()
const results = [];
//function to enter communication data into the database
module.exports.registerCommunication = async function (communicationMode,
    callback) {
    // console.log(communicationMode.getEmail())
    var email = communicationMode.getEmail();
    var phonenumber = communicationMode.getPhone();
    var communicationchoice = communicationMode.getCommunicationMode();
    var disastertype = communicationMode.getDisaster();
    var disasterlevel = communicationMode.getLevel();
    var username = "roger";
    var place = communicationMode.getPlace();
    var roles = "admin";
    var language = communicationMode.getLanguage();
    client.query('INSERT INTO public.communication(email, phonenumber, communicationchoice, disastertype, disasterlevel, username, place, roles, languages)VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [email, phonenumber, communicationchoice, disastertype, disasterlevel,
        username, place, roles, language], (err, res) => {
            if (err) {
                console.log(err.stack)
            } else {
                console.log('data saved successfully');
            }
        })
}
//function to select results done but needs polishing up and the right queries applied.
function selectAdministratorEmail() {
    const query = client.query('SELECT * FROM communication ORDER BY id ASC');
    query.on('row', (row) => {
        results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
        console.log(results);
    });
}
console.log("get report", results);
callback(err, result)

