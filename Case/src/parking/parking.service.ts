import { Injectable } from '@nestjs/common';
import { parkingParamsDto, parkingQueryDto } from './dto/parking.dto.js';

@Injectable()
export class ParkingService {
    calculateparking(
        param: parkingParamsDto,
        query: parkingQueryDto
    ) {
        const hours = param.hours
        const vehicle = query.vehicle
        const weekend = query.weekend

        const billedHours = Math.ceil(hours)
        let hourlyRate = 0
        if (vehicle === 'motorcycle') {
            hourlyRate = 2000
        } else if (vehicle === 'car') {
            hourlyRate = 8000
        } else if (vehicle === 'bus') {
            hourlyRate = 15000
        } 
    
        let weekendSurcharge = 0 
        if (weekend) {
            weekendSurcharge = 0.2
        }

        const total = billedHours * hourlyRate * (1 + weekendSurcharge)
        return {
            "success": true,
            "message": "Parking fee calculated",
            "data": {
                "hours": hours,
                "billedHours": billedHours,
                "vehicle": vehicle,
                "weekend": weekend,
                "hourlyRate": hourlyRate,
                "weekendSurcharge": weekendSurcharge,
                "total": total
            }
            }
    }
}
