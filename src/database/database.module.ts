import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers.js';
import { ConfigService } from '../config/config.service.js';

@Module({
    providers: [...databaseProviders, ConfigService],
    exports: [...databaseProviders]
})
export class DatabaseModule {

}
