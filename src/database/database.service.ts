import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class DatabaseService {
  private db: FirebaseFirestore.Firestore;

  onModuleInit() {
    if (!admin.apps.length) admin.initializeApp();

    this.db = admin.firestore();
  }

  async saveRequest(data: any): Promise<void> {
    await this.db.collection('requests').add({
      ...data,
      timestamp: new Date().toISOString(),
    });
  }

  async getLastRequests(): Promise<any[]> {
    const snapshot = await this.db
      .collection('requests')
      .orderBy('timestamp', 'desc')
      .limit(10)
      .get();

    return snapshot.docs.map((doc) => doc.data());
  }
}
