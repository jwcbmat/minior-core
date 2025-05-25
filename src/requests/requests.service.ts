import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import {
  StoredRequestResponseDto,
  SavedRequestDto,
} from './dto/stored-request-response.dto';

@Injectable()
export class RequestsService {
  constructor(private readonly dbService: DatabaseService) {}

  async getLastRequests(): Promise<StoredRequestResponseDto[]> {
    return await this.dbService.getLastRequests();
  }

  async saveRequest(data: SavedRequestDto): Promise<void> {
    await this.dbService.saveRequest(data);
  }
}
