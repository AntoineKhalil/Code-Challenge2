import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';

@Injectable()
export class ComplaintService {
  getComplaints(): any {

  }
  getComplaintsByStatus(status: string): any {
    return this.complaints.filter(complaint => complaint.status === status);
  }
  updateComplaintStatus(id: string, status: any) {
    const complaintIndex = this.complaints.findIndex(complaint => complaint.id === id);
    if (complaintIndex >= 0) {
      this.complaints[complaintIndex].status = status;
    }
  }
  private readonly complaints: any[] = [];

  create(complaint: any) {
    this.complaints.push(complaint);
  }

  findAll() {
    return this.complaints;
  }
}
