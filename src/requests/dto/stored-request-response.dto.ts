import { ApiProperty } from '@nestjs/swagger';

export class StoredRequestResponseDto {
  @ApiProperty({ example: 8.13 })
  originalFee: number;

  @ApiProperty({ example: 9.19 })
  newFee: number;

  @ApiProperty({ example: 900 })
  deliveryTime: number;

  @ApiProperty({ example: 6651.61 })
  distanceMeters: number;

  @ApiProperty({ example: 'uuid-1234' })
  uuid: string;

  @ApiProperty({ example: 'merchant-123' })
  merchantId: string;

  @ApiProperty()
  userAgent: string;

  @ApiProperty({ example: '2025-05-25T15:30:00Z' })
  timestamp: string;

  @ApiProperty({
    example: {
      from: { lat: 19.3331008, lng: -81.3801101 },
      to: { lat: 19.280354, lng: -81.373868 },
    },
  })
  coordinates: {
    from: { lat: number; lng: number };
    to: { lat: number; lng: number };
  };

  @ApiProperty({ nullable: true, example: 'happy message :)' })
  message: string | null;
}
