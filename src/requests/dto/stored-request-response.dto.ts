export class StoredRequestResponseDto {
  originalFee: number;
  newFee: number;
  deliveryTime: number;
  distanceMeters: number;
  message: string | null;
  timestamp: string;
  userAgent: string;
}

export class SavedRequestDto {
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
