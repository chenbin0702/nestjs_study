import { Logs } from "src/logs/logs.entity";
import { Profile } from "src/profile/profile.entity";
import { Role } from "src/role/role.entity";
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
  @PrimaryGeneratedColumn() id: number;
  @Column()
  username:string;
  @Column()
  password:string;  
  @OneToOne(()=>Profile,(profile)=>profile.user)
  profile:Profile;
  @OneToMany(()=>Logs,(logs)=>logs.user)
  logs:Logs[];
  @ManyToMany(()=>Role,(roles)=>roles.users)
  roles:Role[];
}