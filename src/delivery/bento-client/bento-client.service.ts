import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse, AxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';

type CoordinatesType = { lat: number; lng: number };

interface FeeResponse {
  fee: number;
  deliveryTime: number;
  distanceMeters: number;
}

@Injectable()
export class BentoClientService {
  constructor(private readonly http: HttpService) {}

  async getFee(
    from: CoordinatesType,
    to: CoordinatesType,
    merchantId: string,
    uuid: string,
    authHeader: string,
  ): Promise<FeeResponse> {
    try {
      const response: AxiosResponse<FeeResponse> = await firstValueFrom(
        this.http.post<FeeResponse>(
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

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      const message = axiosError.message || 'Unknown error querying Bento API';
      const status = axiosError.response?.status ?? 500;

      throw new HttpException(`Error querying Bento API: ${message}`, status);
    }
  }
}
