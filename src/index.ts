import express from "express"; 
import {log} from "util";
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Doctor} from "./entity/Doctor";

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "testdb",
    entities: [
       User,
       Doctor
    ],
    synchronize: true,
}).then(connection => {
  //let u = new User();
  //let d = new Doctor();
  //u.name = "kareem Ali";
  //d.name = "dr. kareem ali";
  //connection.manager.save(u).then( u => console.log("user saved with id: ", u.id))
  //connection.manager.save(d).then( d => console.log("doctor saved with id: ", d.id))
  let savedUsers = connection.manager.find(User); 
  savedUsers.then(us => {
    console.log(us);
    //us.filter( u => u.id != 1).map( u => connection.manager.delete(u));
  });
  let savedDoctors = connection.manager.find(Doctor); 
  savedDoctors.then(ds => {
    console.log(ds)
    //ds.filter( u => u.id != 1).map( u => connection.manager.delete(u));
  });
}).catch(error => console.log(error));

const app = express(); // initialize the express server
// create a test route
app.get('/', (req, res, next) => {      
  res.send('Hello world')
})// Define the port to run the server. this could either be defined // in the environment variables or directly as shown below
app.listen(process.env.PORT || 4000, () => {
  console.log("server started"
 );})

