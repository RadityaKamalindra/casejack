import { Controller, Get, Param } from '@nestjs/common';
import { ConvertService } from './convert.service.js';
import { ConvertDto } from './dto/convert.dto.js';

@Controller('convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}
  @Get('length/:meters')
  getMeter(@Param() dto:ConvertDto) {
    return this.convertService.convertMeter(dto)
  }
}
