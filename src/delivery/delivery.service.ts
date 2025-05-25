import { Injectable } from '@nestjs/common';
import { BentoClientService } from './bento-client/bento-client.service';
import { DatabaseService } from '../database/database.service';
import { DeliveryResponseDto } from './dto/delivery-response.dto';
import { DeliveryFeeRequest } from './interfaces/delivery-fee.interface';

@Injectable()
export class DeliveryService {
  constructor(
    private readonly bentoClient: BentoClientService,
    private readonly dbService: DatabaseService,
  ) {}

  async calculateFee(input: DeliveryFeeRequest): Promise<DeliveryResponseDto> {
    const { from, to, merchantId, authHeader, userAgent } = input;
    const uuid = input.uuid.trim();

    const { fee, deliveryTime, distanceMeters } = await this.bentoClient.getFee(
      from,
      to,
      merchantId,
      uuid,
      authHeader,
    );

    const originalFee = fee / 100;
    const newFee = parseFloat((originalFee * 1.13).toFixed(2));

    const record = {
      originalFee,
      newFee,
      deliveryTime: deliveryTime ?? 0,
      distanceMeters: distanceMeters,
      coordinates: {
        from,
        to,
      },
      uuid,
      merchantId,
      userAgent,
    };

    await this.dbService.saveRequest(record);

    return {
      ...record,
      message: null,
    };
  }
}
