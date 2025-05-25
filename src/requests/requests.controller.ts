import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { StoredRequestResponseDto } from './dto/stored-request-response.dto';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get('last')
  @ApiOperation({
    summary: 'Get the 10 most recent delivery fee requests',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the 10 most recent delivery requests.',
    type: [StoredRequestResponseDto],
  })
  @ApiResponse({
    status: 400,
    description:
      'Bad request. Could not retrieve the recent delivery requests.',
  })
  async getLastRequests(): Promise<StoredRequestResponseDto[]> {
    return await this.requestsService.getLastRequests();
  }
}
