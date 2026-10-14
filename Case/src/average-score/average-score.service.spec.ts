import { Test, TestingModule } from '@nestjs/testing';
import { AverageScoreService } from './average-score.service.js';

describe('AverageScoreService', () => {
  let service: AverageScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AverageScoreService],
    }).compile();

    service = module.get<AverageScoreService>(AverageScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
