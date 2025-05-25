import { UseGuards, Controller, Get, Query, Headers } from '@nestjs/common';
import { DeliveryGuard } from './delivery.guard';
import { DeliveryService } from './delivery.service';
import { DeliveryQueryFeeDto } from './dto/delivery-query-fee.dto';
import { DeliveryResponseDto } from './dto/delivery-response.dto';

import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiBearerAuth('auth-token')
@ApiTags('delivery')
@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @UseGuards(DeliveryGuard)
  @Get('fee')
  @ApiOperation({
    summary: 'Calculate delivery price',
  })
  @ApiResponse({
    status: 200,
    description: 'Delivery fee successfully calculated',
    type: DeliveryResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters. Check query values.',
  })
  @ApiResponse({
    status: 401,
    description: 'Access denied. Invalid or missing authentication token.',
  })
  async getFee(
    @Query() query: DeliveryQueryFeeDto,
    @Headers('authorization') authHeader: string,
    @Headers('user-agent') userAgent: string,
  ): Promise<DeliveryResponseDto> {
    const { fromLat, fromLng, toLat, toLng, merchantId, uuid } = query;

    return this.deliveryService.calculateFee({
      from: { lat: fromLat, lng: fromLng },
      to: { lat: toLat, lng: toLng },
      merchantId,
      uuid,
      authHeader,
      userAgent,
    });
  }
}
