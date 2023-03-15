import { IsNotEmpty } from 'class-validator';

export class InviteGroupDto {
  @IsNotEmpty()
  participants: string[];
}
