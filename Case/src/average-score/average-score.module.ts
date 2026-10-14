import { Module } from '@nestjs/common';
import { AverageScoreService } from './average-score.service.js';
import { AverageScoreController } from './average-score.controller.js';

@Module({
  controllers: [AverageScoreController],
  providers: [AverageScoreService],
})
export class AverageScoreModule {}
