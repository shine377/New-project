import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  MobileNumber: number;

  @Column()
  Gender: string;

  @Column()
  Email: string;

  @Column()
  Country: string;
}
