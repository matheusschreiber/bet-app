import { Module } from '@nestjs/common';
import { BetService } from './bet.service';
import { BetController } from './bet.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [BetController],
  providers: [BetService, PrismaService],
})
export class BetModule {}
