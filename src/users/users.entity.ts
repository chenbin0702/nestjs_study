import { Logs } from "src/logs/logs.entity";
import { Role } from "src/role/role.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
  @PrimaryGeneratedColumn() id: number;
  @Column()
  username:string;
  @Column()
  password:string;  
  @OneToMany(()=>Logs,(logs)=>logs.user)
  logs:Logs[];
  @ManyToMany(()=>Role,(roles)=>roles.users)
  roles:Role[];
}