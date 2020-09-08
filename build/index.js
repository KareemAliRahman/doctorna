"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
typeorm_1.createConnection({
    type: "postgres",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: [
        User_1.User
    ],
    synchronize: true,
}).then(function (connection) {
    // here you can start to work with your entities
    connection.query("CREATE DATABASE IF NOT EXISTS");
    console.log("*****************************************");
    console.log("will insert user");
    console.log("*****************************************");
    var u = new User_1.User();
    u.name = "kareem Ali";
    return connection.manager.save(u).then(function (u) { return console.log("user saved with id: ", u.id); });
    //let savedUsers = connection.manager.find(User); 
    //console.log("all users: ", savedUsers);
}).catch(function (error) { return console.log(error); });
var app = express_1.default(); // initialize the express server
// create a test route
app.get('/', function (req, res, next) {
    res.send('Hello world');
}); // Define the port to run the server. this could either be defined // in the environment variables or directly as shown below
app.listen(process.env.PORT || 4000, function () {
    console.log("server started");
});
