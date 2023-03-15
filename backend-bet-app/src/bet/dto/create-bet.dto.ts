import { IsBoolean, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBetDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  matchId: string;

  @IsNotEmpty()
  @IsEnum({
    ongoing: 'ongoing',
    finished: 'finished',
  })
  status: 'ongoing' | 'finished';

  @IsNotEmpty()
  @IsNumber()
  score_1: number;

  @IsNotEmpty()
  @IsNumber()
  score_2: number;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  @IsBoolean()
  score_win: boolean;

  @IsNotEmpty()
  @IsBoolean()
  result_win: boolean;

  @IsNotEmpty()
  @IsNumber()
  points: number;
}
