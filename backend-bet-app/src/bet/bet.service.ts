import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/database/prisma.service';
import { CreateBetDto } from './dto/create-bet.dto';
import { UpdateBetDto } from './dto/update-bet.dto';

@Injectable()
export class BetService {
  constructor(private prisma: PrismaService) {}

  async create(createBetDto: CreateBetDto) {
    const bet = await this.prisma.bet.create({
      //FIXME: problem with dto, User type not compatible with Prisma
      data: {
        id: randomUUID(),
        ...createBetDto,
      },
    });

    return { bet };
  }

  async findAll() {
    const bets = await this.prisma.bet.findMany();

    return { bets };
  }

  async findOne(id: string) {
    const bet = await this.prisma.bet.findUnique({ where: { id } });

    if (!bet) throw new HttpException('BET NOT FOUND', HttpStatus.NOT_FOUND);

    return { bet };
  }

  async update(id: string, updateBetDto: UpdateBetDto) {
    const bet = await this.prisma.bet.findUnique({ where: { id } });

    if (!bet) throw new HttpException('BET NOT FOUND', HttpStatus.NOT_FOUND);

    //FIXME: problem with dto, User type not compatible with Prisma
    await this.prisma.bet.update({ where: { id }, data: updateBetDto });

    return { bet };
  }

  async remove(id: string) {
    const bet = await this.prisma.bet.findUnique({ where: { id } });

    if (!bet) throw new HttpException('BET NOT FOUND', HttpStatus.NOT_FOUND);

    await this.prisma.bet.delete({ where: { id } });

    return { bet };
  }
}
