import { Test, TestingModule } from '@nestjs/testing';
import { BetController } from './bet.controller';
import { BetService } from './bet.service';

describe('BetController', () => {
  let controller: BetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BetController],
      providers: [BetService],
    }).compile();

    controller = module.get<BetController>(BetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
