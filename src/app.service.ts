import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `hey ${process.env.HELLO_MESSAGE}`;
  }
}
