import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { ShippingService } from './shipping.service.js';
import { shippingBodyDto, shippingparamsDto, shippingQueryDto } from './dto/shipping.dto.js';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}
  @Post('/:city')
  calculateShipping(
    @Param() param: shippingparamsDto,
    @Query()query: shippingQueryDto,
    @Body() body: shippingBodyDto
  ) {
    return this.shippingService.calculateShipping(
      param,
      query,
      body
    )
  }
}
