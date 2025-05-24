import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BentoClientService {
  constructor(private readonly http: HttpService) {}

  async getFee(from, to, merchantId: string, uuid: string, authHeader: string) {
    try {
      const response = await firstValueFrom(
        this.http.post(
          'https://api.bento.ky/api/v1/delivery/fee',
          {
            addressFrom: { coordinates: from },
            addressTo: { coordinatesAdjustment: to },
            merchant: { id: merchantId },
            user: { uuid },
          },
          {
            headers: {
              Authorization: authHeader,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        `Error querying Bento API: ${error.message}`,
        error.response?.status || 500,
      );
    }
  }
}
