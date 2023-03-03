import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller('connection')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getHello() {
    const users = await this.prisma.user.findMany();

    if (users.length > 0) return true;
    else return false;
  }
}
