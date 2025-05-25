import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BentoClientService {
  constructor(private readonly http: HttpService) {}

  async getFee(from, to, merchantId: string, uuid: string, authHeader: string) {
    try {
      const { data } = await firstValueFrom(
        this.http.post(
          '/delivery/fee',
          {
            addressFrom: { coordinates: from },
            addressTo: { coordinatesAdjustment: to },
            merchant: { id: merchantId },
            user: { uuid },
          },
          {
            headers: {
              Authorization: authHeader,
            },
          },
        ),
      );
      return data;
    } catch (error) {
      throw new HttpException(
        `Error querying Bento API: ${error.message}`,
        error.response?.status || 500,
      );
    }
  }
}
