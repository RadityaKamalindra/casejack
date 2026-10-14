import { Transform } from "class-transformer";
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, Max, Min } from "class-validator";

export class parkingParamsDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0.5)
    @Max(24)
    hours: number
}

export enum vehicleType {
    'car',
    'motorcycle',
    'bus'
}

export class parkingQueryDto {
    @IsNotEmpty()
    @IsEnum(vehicleType)
    vehicle: string

    @IsOptional()
    @Transform(({ value }) => {
    if (value === undefined) return false;
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
    @IsBoolean()
    weekend?: boolean = false
}