import { Injectable } from '@nestjs/common';
import { TaxDto } from './dto/tax.dto.js';

@Injectable()
export class TaxService {
    calculateSalesTax(dto: TaxDto) {
        const amount = dto.amount
        const rate = dto.rate 
        const inclusive = dto.inclusive == true

        let tax = 0
        let net = 0
        let gross = 0

        if (dto.inclusive) {
            tax = amount * rate / (100 + rate)
            net = amount - tax
            gross = amount
        } else {
            tax = amount * rate / 100
            net = amount
            gross = amount + tax
        }

        return {
            "success": true,
            "message": "Tax calculated",
            "data": {
                "amount": amount,
                "rate": rate,
                "inclusive": inclusive,
                "tax": tax,
                "net": net,
                "gross": gross
            }
        }
    }
}

