import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { StoredRequestResponseDto } from './dto/stored-request-response.dto';

@Injectable()
export class RequestsService {
  constructor(private readonly dbService: DatabaseService) {}

  async getLastRequests(): Promise<StoredRequestResponseDto[]> {
    return await this.dbService.getLastRequests();
  }
}
