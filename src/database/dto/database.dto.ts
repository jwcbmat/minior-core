export class IncomingRequestDto {
  originalFee: number;
  newFee: number;
  deliveryTime: number;
  distanceMeters: number;
  coordinates: {
    from: { lat: number; lng: number };
    to: { lat: number; lng: number };
  };
  uuid: string;
  merchantId: string;
  userAgent: string;
}

export class StoredRequestDto extends IncomingRequestDto {
  timestamp: string;
  message: string | null;
}
