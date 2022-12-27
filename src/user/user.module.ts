import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from 'mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.schema'

@Module({
    imports: [
      MongooseModule.forRoot(
        'mongodb+srv://antoinekhalil:Aei46kms@cluster0.jqnxkmr.mongodb.net/test',
        { useNewUrlParser: true, useUnifiedTopology: true },
      ),
      MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    controllers: [UserController],
    providers: [UserService],
  })
  export class UserModule {}




  