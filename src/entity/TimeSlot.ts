import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne} from "typeorm";
import {Doctor} from "./Doctor";
import {User} from "./User";

enum DaysOfWeek {
    Saturday,
    Sunday,
    Monday,
    Teusday,
    Wednesday,
    Thursday,
    Friday
}

@Entity()
export class TimeSlot extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("enum", {enum: DaysOfWeek, nullable: false}) 
    dayOfWeek: string;

    @Column("time", {nullable: false}) 
    start: Date;

    @Column("time", {nullable: false}) 
    end: Date;

    @ManyToOne(() => Doctor, doctor => doctor.timeSlots)()
    doctor: Doctor;

    @OneToOne(() => User, user => user.appointments)
}
