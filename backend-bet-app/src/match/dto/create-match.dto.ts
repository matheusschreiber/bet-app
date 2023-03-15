import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateMatchDto {
  @IsNotEmpty()
  team_1_name: string;

  @IsNotEmpty()
  team_1_icon: string;

  @IsNotEmpty()
  team_2_name: string;

  @IsNotEmpty()
  team_2_icon: string;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  desc: string;

  @IsNumber()
  @IsOptional()
  team_1_score: number;

  @IsNumber()
  @IsOptional()
  team_2_score: number;
}
