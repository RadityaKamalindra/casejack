import { Test, TestingModule } from '@nestjs/testing';
import { AverageScoreController } from './average-score.controller.js';
import { AverageScoreService } from './average-score.service.js';

describe('AverageScoreController', () => {
  let controller: AverageScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AverageScoreController],
      providers: [AverageScoreService],
    }).compile();

    controller = module.get<AverageScoreController>(AverageScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
