import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export enum currencyType {
    'IDR',
    'USD'
}
export class loanParamDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1000000)
    @Max(1000000000)
    principal: number
}

export class loanQueryDto {
    @IsOptional()
    @IsString()
    @IsEnum(currencyType)
    currency?: string = 'IDR'
}

export class loanBodyDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(60)
    months: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(50)
    annualInterestRate: number
}