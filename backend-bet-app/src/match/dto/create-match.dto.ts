import { IsNotEmpty } from 'class-validator';

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
  match_date: Date;
}
