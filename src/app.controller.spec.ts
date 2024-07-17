import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "hey ${process.env.HELLO_MESSAGE}"', () => {
      const expectedMessage = `hey ${process.env.HELLO_MESSAGE}`;
      expect(appController.getHello()).toBe(expectedMessage);
    });
  });
});
