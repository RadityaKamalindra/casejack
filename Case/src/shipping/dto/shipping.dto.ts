import { Transform, Type } from "class-transformer";
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, Max, Min, ValidateNested } from "class-validator";

export enum cityType {
    'jakarta', 
    'bandung', 
    'surabaya', 
    'medan', 
    'denpasar'
} 

export class shippingparamsDto {
    @IsNotEmpty()
    @IsEnum(cityType)
    city: string
}

export class shippingQueryDto {
    @IsOptional()
    @Transform(({ value }) => {
    if (value === undefined) return false;
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
    })
    @IsBoolean()
    express?: boolean = false

    @IsOptional()
    @Transform(({ value }) => {
    if (value === undefined) return false;
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
    })
    @IsBoolean()
    insurance?: boolean = false
}

export class dimensionDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    lengthCm: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    widthCm: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    heightCm: number;
}

export class shippingBodyDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0.1)
    @Max(30)
    weightKg: number

    @ValidateNested()
    @Type(()=> dimensionDto)
    dimension: dimensionDto
}