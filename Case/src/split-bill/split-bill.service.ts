import { Injectable } from '@nestjs/common';
import { SplitBillBodyDto, SplitBillParamsDto } from './dto/splitBill.dto.js';

@Injectable()
export class SplitBillService {
    calculateBill(
        params: SplitBillParamsDto, 
        body: SplitBillBodyDto
    ) {
        const item = body.items
        const tipPercent = body.tipPercent
        const peopleCount = params.peoplecount
        let subtotal = 0

        for (let i = 0; i < item.length; i++) {
            const price = item[i].price
            const qty = item[i].qty
            subtotal = subtotal + (price * qty)
        }

        const tip = subtotal * tipPercent / 100
        const total = subtotal + tip
        const perPerson = total / peopleCount

        return {
            "success": true,
            "message": "Bill split",
            "data": {
                "peopleCount": peopleCount,
                "subtotal": subtotal,
                "tipPercent": tipPercent,
                "tip": tip,
                "total": total,
                "perPerson": perPerson
            }
        }
    }
}
