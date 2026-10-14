import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { LoansService } from './loans.service.js';
import { loanBodyDto, loanParamDto, loanQueryDto } from './dto/loan.dto.js';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}
  @Post(':principal/installment')
  calculateLoan(
    @Param() params: loanParamDto,
    @Query() query: loanQueryDto,
    @Body() body: loanBodyDto
  ) {
    return this.loansService.calculateLoan(
      params,
      query,
      body
    )
  }
}
