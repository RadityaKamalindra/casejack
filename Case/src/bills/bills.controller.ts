import { Body, Controller, Post } from '@nestjs/common';
import { BillsService } from './bills.service.js';
import { billBodyDto } from './dto/bills.dto.js';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}
  @Post('electricity')
  calculateBill(@Body() dto: billBodyDto){
    return this.billsService.calculateBills(dto)
  } 
}
