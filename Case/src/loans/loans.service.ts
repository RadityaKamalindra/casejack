import { Injectable } from '@nestjs/common';
import { loanBodyDto, loanParamDto, loanQueryDto } from './dto/loan.dto.js';

@Injectable()
export class LoansService {
    calculateLoan(
        params: loanParamDto,
        query: loanQueryDto,
        body: loanBodyDto
    ) {
        const principal = params.principal
        const currency = query.currency
        const months = body.months
        const annualInterestRate = body.annualInterestRate
        const r = annualInterestRate / 12 / 100

        let monthlyInstallment = 0
        if (r == 0) {
            monthlyInstallment = principal / months
        } else {
            monthlyInstallment = principal * r * (1 + r)**months / ((1 + r)**months - 1)
        }
        monthlyInstallment = Math.round(monthlyInstallment)

        const totalPayment = monthlyInstallment * months
        const totalInterest = totalPayment - principal

        return {
            "success": true,
            "message": "Installment calculated",
            "data": {
                "principal": principal,
                "currency": currency,
                "months": months,
                "annualInterestRate": annualInterestRate,
                "monthlyInterestRate": r,
                "monthlyInstallment": monthlyInstallment,
                "totalPayment": totalPayment,
                "totalInterest": totalInterest
            }
        }
    }
}
