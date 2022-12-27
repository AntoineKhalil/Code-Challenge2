import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComplaintSchema } from './complaint.schema';
import { ComplaintController } from './complaint.controller';
import { ComplaintService } from './complaint.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Complaint', schema: ComplaintSchema }]),
  ],
  controllers: [ComplaintController],
  providers: [ComplaintService],
})
export class ComplaintModule {}