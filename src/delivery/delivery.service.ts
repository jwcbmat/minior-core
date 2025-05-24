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
    const bentoData = await this.bentoClient.getFee(
      input.from,
      input.to,
      input.merchantId,
      input.uuid,
      input.authHeader,
    );

    const originalFee = bentoData.fee / 100;
    const newFee = parseFloat((originalFee * 1.13).toFixed(2));

    const record = {
      originalFee,
      newFee,
      deliveryTime: bentoData.deliveryTime ?? 0,
      distanceMeters: bentoData.distanceMeters,
      coordinates: {
        from: input.from,
        to: input.to,
      },
      uuid: input.uuid,
      merchantId: input.merchantId,
      userAgent: input.userAgent,
    };

    await this.dbService.saveRequest(record);

    return {
      ...record,
      message: null,
    };
  }
}
