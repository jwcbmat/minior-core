import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class RequestsService {
  constructor(private readonly dbService: DatabaseService) {}

  async getLastRequests(): Promise<any[]> {
    return this.dbService.getLastRequests();
  }

  async saveRequest(data: any): Promise<void> {
    await this.dbService.saveRequest(data);
  }
}
