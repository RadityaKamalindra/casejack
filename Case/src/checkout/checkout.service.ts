import { Injectable } from '@nestjs/common';
import { checkoutBodyDto, checkoutQueryDto } from './dto/checkout.dto.js';

@Injectable()
export class CheckoutService {
    calculateCheckout(
        query: checkoutQueryDto,
        body: checkoutBodyDto
    ) {
        const item = body.items
        const member = query.member 
        const coupon = query.coupon
        let subtotal = 0

        for (let i = 0; i < item.length; i++) {
            const price = item[i].price
            const qty = item[i].qty
            subtotal = subtotal + (price * qty)
        }
        let memberDisc = 0
        if (member) {
            memberDisc = subtotal * 5/100
        }

        let couponDisc = 0
        if (coupon == 'HEMAT10') {
            couponDisc = subtotal * 0.1
        } else if (coupon == 'HEMAT20') {
            couponDisc = subtotal * 0.2
        } else if (coupon == 'FREESHIP') {
            couponDisc = 0
        } 
        const totalDisc = memberDisc + couponDisc
        const grandTotal = subtotal - totalDisc
        
        return {
            "success": true,
            "message": "Checkout calculated",
            "data": {
                "subtotal": subtotal,
                "member": true,
                "coupon": coupon,
                "discounts": {
                "member": memberDisc,
                "coupon": couponDisc,
                "total": totalDisc
                },
                "grandTotal": grandTotal
            }
        }
    }
}
