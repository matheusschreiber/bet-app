import { IsNumber, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  name: string;

  @IsOptional()
  picture: string;

  @IsNumber()
  @IsOptional()
  points: number;
}
