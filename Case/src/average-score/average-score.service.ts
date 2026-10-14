import { Injectable } from '@nestjs/common';
import { AverageScoreDto } from './dto/averageScore.dto.js';

@Injectable()
export class AverageScoreService {
    AverageExamScore(dto: AverageScoreDto) {
        const scores = dto.scores
        const passmark = dto.passmark
        let total = 0
        let highest = scores[0]
        let lowest = scores[0]
        let passed = 0
        let failed = 0
        for (let i = 0; i < scores.length; i++) {
            total += scores[i]
            if (highest < scores[i]) {
                highest = scores[i]
            }  
            if (lowest > scores[i]) {
                lowest = scores[i]
            }    
            if (scores[i] >= passmark) {
                passed++
            } else {
                failed++
            }     
        }
        const average = total / scores.length
        return {
            "success": true,
            "message": "Score summary calculated",
            "data": {
                "count": scores.length,
                "average": average,
                "highest": highest,
                "lowest": lowest,
                "passMark": passmark,
                "passed": passed,
                "failed": failed
            }
        }
    }
}
