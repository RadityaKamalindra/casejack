import { Controller, Get, Param, Query } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { temperatureParamsDto, temperatureQueryDto } from './dto/temperature.dto.js';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}
  @Get('temperature/:value')
  getTemperature(
    @Param() params: temperatureParamsDto,
    @Query() query: temperatureQueryDto
) {
  return this.temperatureService.calculateTemperature(
    params,
    query
  )
  }
}
