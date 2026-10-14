import { Injectable } from '@nestjs/common';
import { billBodyDto } from './dto/bills.dto.js';

@Injectable()
export class BillsService { 
    calculateBills(dto: billBodyDto){
        const customerName = dto.customerName
        const previousKwh = dto.meter.previousKwh
        const currentKwh = dto.meter.currentKwh
        if (previousKwh > currentKwh) {
            return {
                "message": 'currentKwh harus lebih besar dari previousKwh'
            }
        }

        const baseFee = dto.rates.baseFee
        const perKwh = dto.rates.perKwh
        const taxRate = dto.rates.taxRate = 11

        const usageKwh = currentKwh - previousKwh
        const usageFee = usageKwh * perKwh
        const subtotal = usageFee + baseFee
        const tax = subtotal * taxRate / 100
        const total = subtotal + tax

        return {
            "success": true,
            "message": "Electricity bill calculated",
            "data": {
                "customerName": customerName,
                "usageKwh": usageKwh,
                "baseFee": baseFee,
                "usageFee": usageFee,
                "subtotal": subtotal,
                "taxRate": taxRate,
                "tax": tax,
                "total": total
            }
        }
    }
}
