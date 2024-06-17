import { User } from "src/users/users.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  gender: number;
  @Column()
  age: number;
  @Column()
  phone: string;
  @Column()
  address:string;
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}