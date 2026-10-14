import { Module } from '@nestjs/common';
import { SplitBillService } from './split-bill.service.js';
import { SplitBillController } from './split-bill.controller.js';

@Module({
  controllers: [SplitBillController],
  providers: [SplitBillService],
})
export class SplitBillModule {}
