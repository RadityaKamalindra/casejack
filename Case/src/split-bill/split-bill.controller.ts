import { Body, Controller, Param, Post } from '@nestjs/common';
import { SplitBillService } from './split-bill.service.js';
import { SplitBillBodyDto, SplitBillParamsDto } from './dto/splitBill.dto.js';

@Controller('split-bill')
export class SplitBillController {
  constructor(private readonly splitBillService: SplitBillService) {}
  @Post(':peoplecount/split')
  getSplitBill(
    @Param()  params: SplitBillParamsDto,
    @Body() body: SplitBillBodyDto

  ){
    return this.splitBillService.calculateBill(
      params,
      body
    )
  }
}
