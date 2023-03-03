import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: {
        id: randomUUID(),
        ...createUserDto,
        points: 0,
      },
    });

    return { user };
  }

  async findAll() {
    const users = await this.prisma.user.findMany();

    return { users };
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) throw new HttpException('USER NOT FOUND', HttpStatus.NOT_FOUND);

    return { user };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) throw new HttpException('USER NOT FOUND', HttpStatus.NOT_FOUND);

    await this.prisma.user.update({ where: { id }, data: updateUserDto });

    return { user };
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) throw new HttpException('USER NOT FOUND', HttpStatus.NOT_FOUND);

    await this.prisma.user.delete({ where: { id } });

    return { user };
  }
}
