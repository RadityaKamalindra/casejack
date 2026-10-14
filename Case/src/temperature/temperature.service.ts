import { Injectable } from '@nestjs/common';
import { temperatureParamsDto, temperatureQueryDto } from './dto/temperature.dto.js';

@Injectable()
export class TemperatureService {
    calculateTemperature(
        params: temperatureParamsDto, 
        query: temperatureQueryDto) 
    {
        const value = params.value
        const from = query.from
        const to = query.to

        let result = 0
        if (from == 'C' && to == 'F') {
            result = value * 9/5 + 32
        }
        if (from == 'C' && to == 'K') {
            result = value + 273.15
        }
        if (from == 'F' && to == 'C') {
            result = (value - 32) * 5/9
        }
        if (from == 'F' && to == 'K') {
            result = (value - 32) * 5/9 + 273.15
        }
        if (from == 'K' && to == 'C') {
            result = value - 273.15
        }
        if (from == 'K' && to == 'F') {
            result = (value - 273.15) * 9/5 + 32
        }

        return {
            "success": true,
            "message": "Temperature converted",
            "data": {
                "value": value,
                "from": from,
                "to": to,
                "result": result
        }
    }
}
}
