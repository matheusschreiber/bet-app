import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { BetModule } from './bet/bet.module';
import { MatchModule } from './match/match.module';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [BetModule, MatchModule, UserModule, GroupModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
