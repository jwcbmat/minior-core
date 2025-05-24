import { Controller, Get } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { StoredRequestResponseDto } from './dto/stored-request-response.dto';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get('last')
  async getLastRequests(): Promise<StoredRequestResponseDto[]> {
    return this.requestsService.getLastRequests();
  }
}
