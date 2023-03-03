import { Module } from '@nestjs/common';
import { BetService } from './bet.service';
import { BetController } from './bet.controller';

@Module({
  controllers: [BetController],
  providers: [BetService]
})
export class BetModule {}
