import { Injectable } from '@nestjs/common';
import { ConvertDto } from './dto/convert.dto.js';

@Injectable()
export class ConvertService {
    convertMeter(dto: ConvertDto) {
    const lengthM = dto.meters
    const lengthKM = dto.meters / 1000
    const lengthCM = dto.meters * 100
    const miles = dto.meters / 1609.34

    return {
        "succes": true,
        "message": "Length converted",
        "data": {
          "meter": lengthM,
          "kilometers": lengthKM,
          "centimeters": lengthCM,
          "miles": miles
        }
    }
  }
}
