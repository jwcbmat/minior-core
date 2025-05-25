import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IncomingRequestDto, StoredRequestDto } from './dto/database.dto';

@Injectable()
export class DatabaseService {
  private db: FirebaseFirestore.Firestore;

  onModuleInit() {
    if (!admin.apps.length) admin.initializeApp();
    this.db = admin.firestore();
  }

  async saveRequest(data: IncomingRequestDto): Promise<void> {
    await this.db.collection('requests').add({
      ...data,
      timestamp: new Date().toISOString(),
    });
  }

  async getLastRequests(): Promise<StoredRequestDto[]> {
    const snapshot = await this.db
      .collection('requests')
      .orderBy('timestamp', 'desc')
      .limit(10)
      .get();

    return snapshot.docs.map((doc) => doc.data() as StoredRequestDto);
  }
}
