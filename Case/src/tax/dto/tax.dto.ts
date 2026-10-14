import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, Max, Min } from "class-validator";

export class TaxDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    amount: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)
    rate: number

    @IsOptional()
    @IsBoolean()
    inclusive?: boolean = false
}