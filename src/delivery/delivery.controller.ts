import { Controller, Get, Query, Headers } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryResponseDto } from './dto/delivery-response.dto';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get('fee')
  async getFee(
    @Query('fromLat') fromLat: number,
    @Query('fromLng') fromLng: number,
    @Query('toLat') toLat: number,
    @Query('toLng') toLng: number,
    @Query('merchantId') merchantId: string,
    @Query('uuid') uuid: string,
    @Headers('authorization') authHeader: string,
    @Headers('user-agent') userAgent: string,
  ): Promise<DeliveryResponseDto> {
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
