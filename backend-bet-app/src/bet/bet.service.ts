import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/database/prisma.service';
import { CreateBetDto } from './dto/create-bet.dto';
import { CreateMatchInput } from './dto/create-match-input';
import { CreateUserInput } from './dto/create-user-input';
import { UpdateBetDto } from './dto/update-bet.dto';

@Injectable()
export class BetService {
  constructor(private prisma: PrismaService) {}

  async create(createBetDto: CreateBetDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: createBetDto.userId },
    });

    if (!user) throw new HttpException('USER NOT FOUND', HttpStatus.NOT_FOUND);

    const createUserInput: CreateUserInput = {
      connect: { id: user.id },
    };

    const match = await this.prisma.match.findUnique({
      where: { id: createBetDto.matchId },
    });

    if (!match)
      throw new HttpException('MATCH NOT FOUND', HttpStatus.NOT_FOUND);

    const createMatchInput: CreateMatchInput = {
      connect: { id: match.id },
    };

    const bet = await this.prisma.bet.create({
      data: {
        id: randomUUID(),
        status: createBetDto.status,
        score_1: createBetDto.score_1,
        score_2: createBetDto.score_2,
        date: createBetDto.date,
        result_win: createBetDto.result_win,
        score_win: createBetDto.score_win,
        points: createBetDto.points,
        user: createUserInput,
        match: createMatchInput,
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

    const user = await this.prisma.user.findUnique({
      where: { id: bet.id_user },
    });

    const match = await this.prisma.match.findUnique({
      where: { id: bet.id_match },
    });

    return {
      status: bet.status,
      score_1: bet.score_1,
      score_2: bet.score_2,
      date: bet.date,
      user,
      match,
    };
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
