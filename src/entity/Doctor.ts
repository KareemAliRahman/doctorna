import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {Gender, Title, Speciality} from "./helperTypes";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({default: "no description"})
    description: string;

    @Column({default: 0})
    price: number;

    @Column({default: 0})
    telphone: number;

    @Column("enum", {enum: Gender, default: Gender.Other})
    gender: Gender;

    @Column("enum", {enum: Title, default: Title.Specialist})
    title: Title;

    @Column("enum", {enum: Speciality, default: Speciality.Other_Specialty})
    speciality: Speciality;

}
