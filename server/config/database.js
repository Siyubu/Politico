const mongoose = require("mongoose");
const { AppConfig } = require("./");

module.exports = callback => {
    mongoose.connect(AppConfig.dbString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection;
    mongoose.set("useCreateIndex", true);
    mongoose.set("useFindAndModify", false);

    db.on("connected", () => {
        console.log("Mongoose connected");
    });

    db.on("error", err => {
        console.log(`Mongoose default connection error: ${err}`);
        process.exit(1);
    });

    db.on("disconnected", err => {
        console.log('Mongoose default connection disconnected........');
        process.exit(1);
    });

    db.on("open", () => {
    callback(mongoose);
    });
}