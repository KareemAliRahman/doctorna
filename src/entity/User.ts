import {BaseEntity, Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
    //@Column("text")
    //description: string;

    //@Column()
    //filename: string;

    //@Column("double")
    //views: number;

    //@Column()
    //isPublished: boolean;
}
