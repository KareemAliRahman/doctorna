import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {TimeSlot} from "./TimeSlot";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(() => TimeSlot, timeSlot => timeSlot.user)
    timeSlots : TimeSlot[];
}
