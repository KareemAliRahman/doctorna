"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const Doctor_1 = require("./entity/Doctor");
typeorm_1.createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "testdb",
    entities: [
        User_1.User,
        Doctor_1.Doctor
    ],
    synchronize: true,
}).then(connection => {
    //let u = new User();
    //let d = new Doctor();
    //u.name = "kareem Ali";
    //d.name = "dr. kareem ali";
    //connection.manager.save(u).then( u => console.log("user saved with id: ", u.id))
    //connection.manager.save(d).then( d => console.log("doctor saved with id: ", d.id))
    let savedUsers = connection.manager.find(User_1.User);
    savedUsers.then(us => {
        console.log(us);
        //us.filter( u => u.id != 1).map( u => connection.manager.delete(u));
    });
    let savedDoctors = connection.manager.find(Doctor_1.Doctor);
    savedDoctors.then(ds => {
        console.log(ds);
        //ds.filter( u => u.id != 1).map( u => connection.manager.delete(u));
    });
}).catch(error => console.log(error));
const app = express_1.default(); // initialize the express server
// create a test route
app.get('/', (req, res, next) => {
    res.send('Hello world');
}); // Define the port to run the server. this could either be defined // in the environment variables or directly as shown below
app.listen(process.env.PORT || 4000, () => {
    console.log("server started");
});
