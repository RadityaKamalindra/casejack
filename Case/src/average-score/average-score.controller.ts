import { Body, Controller, Post } from '@nestjs/common';
import { AverageScoreService } from './average-score.service.js';
import { AverageScoreDto } from './dto/averageScore.dto.js';

@Controller('average-score')
export class AverageScoreController {
  constructor(private readonly averageScoreService: AverageScoreService) {}
  @Post('average')
    getScore(@Body() dto:AverageScoreDto) {
      return this.averageScoreService.AverageExamScore(dto)
    }
}
