import { Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    ManyToOne, 
    JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Complaint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(type => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: number;
}

