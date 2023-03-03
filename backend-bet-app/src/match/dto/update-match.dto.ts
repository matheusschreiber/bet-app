import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateMatchDto } from './create-match.dto';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
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
