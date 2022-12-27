import {
    AfterInsert,
    AfterRemove,
    AfterUpdate,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';
  import { Complaint } from '../complaint/complaint.entity';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    email: string;
  
    @Column()
    password: string;
  
    @Column({ default: true })
    admin: boolean;
  
    @OneToMany(() => Complaint, (report) => report.user)
    complaint: Complaint[];
  
    @AfterInsert()
    logInsert() {
      console.log('Inserted User with id', this.id);
    }
  
    @AfterUpdate()
    logUpdate() {
      console.log('Updated User with id', this.id);
    }
  
    @AfterRemove()
    logRemove() {
      console.log('Removed User with id', this.id);
    }
  }