import express from "express"; 
import {log} from "util";
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection({
    type: "postgres",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: [
       User 
    ],
    synchronize: true,
}).then(connection => {
  // here you can start to work with your entities
  connection.query("CREATE DATABASE IF NOT EXISTS");
  console.log("*****************************************");
  console.log("will insert user");
  console.log("*****************************************");
  let u = new User();
  u.name = "kareem Ali";
  return connection.manager.save(u).then( u => console.log("user saved with id: ", u.id))

  //let savedUsers = connection.manager.find(User); 
  //console.log("all users: ", savedUsers);
}).catch(error => console.log(error));

const app = express(); // initialize the express server
// create a test route
app.get('/', (req, res, next) => {      
  res.send('Hello world')
})// Define the port to run the server. this could either be defined // in the environment variables or directly as shown below
app.listen(process.env.PORT || 4000, () => {
  console.log("server started"
 );})

