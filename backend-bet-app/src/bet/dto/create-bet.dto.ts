import { Match, User } from '@prisma/client';
import { IsDate, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBetDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  matchId: string;

  @IsNotEmpty()
  @IsEnum({
    ongoing: 'ONGOING',
    won: 'WON',
    lost: 'LOST',
  })
  status: 'ONGOING' | 'WON' | 'LOST';

  @IsNotEmpty()
  @IsNumber()
  score_1: number;

  @IsNotEmpty()
  @IsNumber()
  score_2: number;

  @IsNotEmpty()
  date: Date;
}
