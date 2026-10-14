import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvertModule } from './convert/convert.module.js';
import { TaxModule } from './tax/tax.module.js';
import { AverageScoreModule } from './average-score/average-score.module.js';
import { SplitBillModule } from './split-bill/split-bill.module.js';
import { TemperatureModule } from './temperature/temperature.module.js';
import { CheckoutModule } from './checkout/checkout.module.js';
import { LoansModule } from './loans/loans.module.js';
import { BillsModule } from './bills/bills.module.js';
import { ParkingModule } from './parking/parking.module.js';
import { ShippingModule } from './shipping/shipping.module.js';

@Module({
  imports: [ConvertModule, TaxModule, AverageScoreModule, SplitBillModule, TemperatureModule, CheckoutModule, LoansModule, BillsModule, ParkingModule, ShippingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
