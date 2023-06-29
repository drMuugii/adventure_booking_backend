import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './resource/Users/model/users.model';
import { UsersModule } from './resource/Users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'ec2-18-140-151-49.ap-southeast-1.compute.amazonaws.com',
      port: 3306,
      username: 'rtd',
      password: 'Tiny722$',
      database: 'adventure_booking',
      models: [User],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
