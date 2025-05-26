import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { IncomingRequestDto, StoredRequestDto } from './dto/database.dto';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private db: FirebaseFirestore.Firestore;

  constructor(private readonly config: ConfigService) {}

  onModuleInit() {
    const emulatorHost = this.config.get<string>('FIRESTORE_EMULATOR_HOST');
    const projectId = this.config.get<string>('GOOGLE_CLOUD_PROJECT');

    if (emulatorHost) {
      process.env.FIRESTORE_EMULATOR_HOST = emulatorHost;
      process.env.GOOGLE_CLOUD_PROJECT ||= projectId;
    } else if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        projectId: this.config.get<string>('GOOGLE_CLOUD_PROJECT'),
      });
    }

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
