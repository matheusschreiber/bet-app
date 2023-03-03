import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/database/prisma.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Injectable()
export class MatchService {
  constructor(private prisma: PrismaService) {}

  async create(createMatchDto: CreateMatchDto) {
    const match = await this.prisma.match.create({
      data: {
        id: randomUUID(),
        ...createMatchDto,
      },
    });

    return { match };
  }

  async findAll() {
    const matches = await this.prisma.match.findMany();

    return { matches };
  }

  async findOne(id: string) {
    const match = await this.prisma.match.findUnique({ where: { id } });

    if (!match)
      throw new HttpException('MATCH NOT FOUND', HttpStatus.NOT_FOUND);

    return { match };
  }

  async update(id: string, updateMatchDto: UpdateMatchDto) {
    const match = await this.prisma.match.findUnique({ where: { id } });

    if (!match)
      throw new HttpException('MATCH NOT FOUND', HttpStatus.NOT_FOUND);

    await this.prisma.match.update({ where: { id }, data: updateMatchDto });

    return { match };
  }

  async remove(id: string) {
    const match = await this.prisma.match.findUnique({ where: { id } });

    if (!match)
      throw new HttpException('MATCH NOT FOUND', HttpStatus.NOT_FOUND);

    await this.prisma.match.delete({ where: { id } });

    return { match };
  }
}
