import { Controller, Get, Param, Query } from '@nestjs/common';
import { ParkingService } from './parking.service.js';
import { parkingParamsDto, parkingQueryDto } from './dto/parking.dto.js';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}
  @Get('/:hours')
  calculateParking(
    @Param() param: parkingParamsDto,
    @Query() query: parkingQueryDto
  ) {
    return this.parkingService.calculateparking(
      param,
      query
    )
  }
}
