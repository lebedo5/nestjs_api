import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import {
    INestApplication,
    ValidationPipe,
} from '@nestjs/common';

describe('App e2e', () => {
    let app: INestApplication;

    //Start logic
    beforeAll(async () => {
        //important to integration testing, implement module which test
        const moduleRef =
            await Test.createTestingModule({
                imports: [AppModule],
            }).compile();
        // create nestjs testing application, try emulate app
        app = moduleRef.createNestApplication();
        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
            }),
        );

        //start server
        await app.init();
    });

    //End logic
    afterAll(() => {
        app.close();
    });

    it.todo('should pass');
});
