import {EntityRepository, Repository} from "typeorm";
import {Doctor} from "../entity/Doctor";

@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor>{
  saveNewDoctor(firstName: string, lastName: string){
    let doctor = new Doctor();
    doctor.firstName = firstName;
    doctor.lastName = lastName;
    return this.insert(doctor);
  }
}
