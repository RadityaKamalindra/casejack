import { Injectable, NotFoundException } from '@nestjs/common';
import { shippingBodyDto, shippingparamsDto, shippingQueryDto } from './dto/shipping.dto.js';

@Injectable()
export class ShippingService {
    calculateShipping(
        param: shippingparamsDto,
        query: shippingQueryDto,
        body: shippingBodyDto
    ) {
        const city = param.city
        const express = query.express
        const insurance = query.insurance
        const weightKg = body.weightKg

        const lengthcm = body.dimension.lengthCm
        const widthCm = body.dimension.widthCm
        const heightCm = body.dimension.heightCm

        const volumetricKg = lengthcm * widthCm * heightCm / 5000
        const chargeableKg = Math.max(weightKg, volumetricKg)

        let baseFare = 0 
        if (city == 'jakarta') {
            baseFare = 9000
        } else if (city == 'bandung') {
            baseFare = 12000
        } else if (city == 'surabaya') {
            baseFare = 15000
        } else if (city == 'medan') {
            baseFare = 18000
        } else if (city == 'denpasar') {
            baseFare = 20000
        } else {
            throw new NotFoundException('unsupported city')
        }

        let weightExtra = 0
        if (chargeableKg > 1) {
            weightExtra = (chargeableKg - 1) * 2000
        }

        let expressFee = 0
        if (express) {
            expressFee = (baseFare + weightExtra) * 0.5
        }

        let insurancefee = 0
        if (insurance) {
            insurancefee = chargeableKg * 1000
        }

        const total = baseFare + weightExtra + expressFee + insurancefee

        return {
            "success": true,
            "message": "Shipping cost calculated",
            "data": {
                "city": city,
                "express": express,
                "insurance": insurance,
                "weightKg": weightKg,
                "volumetricKg": volumetricKg,
                "chargeableKg": chargeableKg,
                "baseFare": baseFare,
                "expressFee": expressFee,
                "insuranceFee": insurancefee,
                "total": total
            }
        }
    }
}
