import { User } from "src/users/users.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany(() => User, (user) => user.logs)
  @JoinTable({name: 'user_role'})
  users: User[];
}