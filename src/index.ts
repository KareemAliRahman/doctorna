import express from "express"; 
import {log} from "util";
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Doctor} from "./entity/Doctor";
import {UserRepository} from "./repository/UserRepository"
import {DoctorRepository} from "./repository/DoctorRepository"

const app = express();

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

  //let userRepo = connection.getCustomRepository(UserRepository);
  //userRepo.saveNewUser("Kareem", "Ali");
  //let doctorRepo = connection.getCustomRepository(DoctorRepository);
  //doctorRepo.saveNewDoctor("Hazem", "Ali");
  

  let savedUsers = connection.manager.find(User); 
  savedUsers.then(us => {
    console.log(us);
    //us.filter( u => u.id != 1).map( u => connection.manager.delete(User,u.id));
  });
  let savedDoctors = connection.manager.find(Doctor); 
  savedDoctors.then(ds => {
    console.log(ds)
    //ds.filter( u => u.id != 1).map( u => connection.manager.delete(Doctor,u.id));
  });
}).catch(error => console.log(error));


app.get('/', (req, res, next) => {      
  res.send('Hello world')
});

app.listen(process.env.PORT || 4000, () => {
  console.log("server started");
});

