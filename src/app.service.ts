import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class AppService {
  client: any;

  constructor() {
    MongoClient.connect(process.env.MONGODB_URI).then(
      (client) => (this.client = client),
    );
  }

  async logItemHandler(item: any): Promise<boolean | { message: string }> {
    try {
      const db = this.client.db(process.env.MONGODB_DATABASE);
      const items = db.collection('items');
      await items.insertOne({
        ...item,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      return Promise.resolve(true);
    } catch (e) {
      return Promise.reject('Something wrong happened.');
    }
  }
}
