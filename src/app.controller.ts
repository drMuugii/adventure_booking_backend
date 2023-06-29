import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Sequelize } from 'sequelize-typescript';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private sequelize: Sequelize,
  ) {
    this.sequelize.sync();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
