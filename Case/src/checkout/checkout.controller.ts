import { Body, Controller, Post, Query } from '@nestjs/common';
import { CheckoutService } from './checkout.service.js';
import { checkoutBodyDto, checkoutQueryDto } from './dto/checkout.dto.js';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}
  @Post('discount')
  getCheckout(
    @Query() query: checkoutQueryDto,
    @Body() body: checkoutBodyDto 
  ) {
    return this.checkoutService.calculateCheckout(
      query,
      body
    )
  }
}
