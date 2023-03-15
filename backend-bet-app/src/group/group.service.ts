import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/database/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { CreateUserInput } from './dto/create-user-input';
import { InviteGroupDto } from './dto/invite-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async create(createGroupDto: CreateGroupDto) {
    const admin = await this.prisma.user.findUnique({
      where: { id: createGroupDto.adminId },
    });

    if (!admin) throw new HttpException('USER NOT FOUND', HttpStatus.NOT_FOUND);

    const createUserInput: CreateUserInput = {
      connect: { id: admin.id },
    };

    const group = await this.prisma.group.create({
      data: {
        id: randomUUID(),
        admin: createUserInput,
        name: createGroupDto.name,
        prize: createGroupDto.prize,
        participants: {
          create: createGroupDto.participants.map((userId) => {
            return { user: { connect: { id: userId } } };
          }),
        },
      },
      include: { participants: true },
    });

    return { group };
  }

  async findAll() {
    const groups = await this.prisma.group.findMany({
      include: {
        participants: { select: { user: true } },
      },
    });
    return { groups };
  }

  async findOne(id: string) {
    const group = await this.prisma.group.findUnique({
      where: { id: id },
      include: {
        participants: { select: { user: true } },
      },
    });
    if (!group)
      throw new HttpException('GROUP NOT FOUND', HttpStatus.NOT_FOUND);

    return { group };
  }

  async update(id: string, updateGroupDto: UpdateGroupDto) {
    const group = await this.prisma.group.findUnique({
      where: { id: id },
    });
    if (!group)
      throw new HttpException('GROUP NOT FOUND', HttpStatus.NOT_FOUND);

    if (updateGroupDto.adminId) {
      const found = await this.prisma.user.findUnique({
        where: { id: updateGroupDto.adminId },
      });
      if (!found)
        throw new HttpException('ADMIN NOT FOUND', HttpStatus.NOT_FOUND);
    }

    await this.prisma.group.update({ where: { id }, data: updateGroupDto });

    return { group };
  }

  async remove(id: string) {
    const group = await this.prisma.group.findUnique({
      where: { id: id },
      include: {
        participants: { select: { user: true } },
      },
    });
    if (!group)
      throw new HttpException('GROUP NOT FOUND', HttpStatus.NOT_FOUND);

    await this.prisma.$transaction([
      this.prisma.userGroup.deleteMany({
        where: { groupId: id },
      }),
      this.prisma.group.delete({
        where: { id: id },
      }),
    ]);

    return { group };
  }

  async invite(id: string, inviteGroupDto: InviteGroupDto) {
    // this doesn't work well

    // try {
    //   await Promise.all(
    //     inviteGroupDto.participants.map(async (newParticipantId) => {
    //       await this.prisma.$transaction([
    //         this.prisma.userGroup.create({
    //           data: {
    //             user: { connect: { id: newParticipantId } },
    //             group: { connect: { id: id } },
    //           },
    //         }),
    //       ]);
    //     }),
    //   );

    //   return { message: 'success' };
    // } catch (err) {
    //   throw new HttpException('COULD NOT INVITE', HttpStatus.BAD_REQUEST);
    // }

    // more appropriate method
    try {
      await this.prisma.$transaction(
        inviteGroupDto.participants.map((newParticipantId) => {
          return this.prisma.userGroup.create({
            data: {
              user: { connect: { id: newParticipantId } },
              group: { connect: { id: id } },
            },
          });
        }),
      );

      return { message: 'success' };
    } catch (err) {
      throw new HttpException('COULD NOT INVITE', HttpStatus.BAD_REQUEST);
    }
  }
}
