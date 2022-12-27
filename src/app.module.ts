import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ComplaintModule } from './complaint/complaint.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://antoinekhalil:Aei46kms@cluster0.jqnxkmr.mongodb.net/test'),
    UserModule,
    ComplaintModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
