import { IsNotEmpty } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty()
  adminId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  prize: string;

  @IsNotEmpty()
  participants: string[];
}
