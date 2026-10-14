import { IsEnum, IsNotEmpty, IsNumber, IsString, Max, Min, NotEquals } from "class-validator";

export enum temperaturType {
    C,
    F,
    K
}

export class temperatureParamsDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(-273.15)
    @Max(1000)
    value: number
}

export class temperatureQueryDto {
    @IsNotEmpty()
    @IsString()
    @IsEnum(temperaturType)
    from: string

    @IsNotEmpty()
    @IsString()
    @IsEnum(temperaturType)
    @NotEquals('from', {
        message: 'must be different'
    })
    to: string
}