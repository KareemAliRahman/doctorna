import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    //@Column("text")
    //description: string;

    //@Column()
    //filename: string;

    //@Column("double")
    //views: number;

    //@Column()
    //isPublished: boolean;
}
