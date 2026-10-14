import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength, ValidateNested } from "class-validator";

export class meterDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    previousKwh: number 

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    currentKwh: number
}

export class ratesDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    baseFee: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    perKwh: number

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(20)
    taxRate?: number = 11
}

export class billBodyDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    customerName: string

    @ValidateNested()
    @Type(() => meterDto)
    meter: meterDto

    @ValidateNested()
    @Type(()=> ratesDto)
    rates: ratesDto
}