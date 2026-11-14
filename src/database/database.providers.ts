import { DataSource } from "typeorm";
import { ConfigService } from "../config/config.service.js";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: config.get('HOST'),
                port: +config.get('PORT_DB'),
                username: config.get('USERNAME'),
                password: config.get('PASSWORD'),
                database: config.get('DATABASE')
            });

            return dataSource.initialize();
        }
    }

]