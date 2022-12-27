import { Controller, Post, Get, Body, Param, Put, Query, UseGuards } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { Complaint } from './complaint.entity';
import { CreateComplaintDto } from './create-report.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from 'src/user/decorators/current-user.decorator';
import { User } from 'src/user/user.entity';

@Controller('complaint')
export class ComplaintController {
  constructor(private readonly complaintService: ComplaintService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(Complaint)
  createReport(@Body() body: CreateComplaintDto, @CurrentUser() user: User) {
    return this.complaintService.create(body);
  }

  @Get()
  async findAll(): Promise<Complaint[]> {
    return this.complaintService.findAll();
  }

  @Put(':id')
  async updateComplaintStatus(@Param('id') id: string, @Body() data: any) {
    // Find the complaint with the specified ID and update its status in the database
    const updatedComplaint = await this.complaintService.updateComplaintStatus(id, data.status);
    return updatedComplaint;
  }

  @Get()
  async getComplaints(@Query('status') status: string) {
    let complaints;
    if (status) {
      // Return a list of complaints with the specified status
      complaints = await this.complaintService.getComplaintsByStatus(status);
    } else {
      // Return a list of all complaints
      complaints = await this.complaintService.getComplaints();
    }
    // Group the complaints by client type (isVIP) and sort them by creation date
    const groupedComplaints = complaints.reduce((acc, complaint) => {
      const key = complaint.isVIP ? 'VIP' : 'non-VIP';
      acc[key] = acc[key] || [];
      acc[key].push(complaint);
      return acc;
    }, {});
    return Object.entries(groupedComplaints)
      .map(([key, value]) => ({
        clientType: key,
        complaints: value.sort((a: { createdAt: number; }, b: { createdAt: number; }) => a.createdAt - b.createdAt),
      }))
  }
}