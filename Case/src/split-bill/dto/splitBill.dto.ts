import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MAX, MaxLength, Min, MinLength, ValidateNested } from "class-validator";

export class SplitBillParamsDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(2)
    @Max(20)
    peoplecount: number
}

export class SplitBillItemDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(50)
    name: string

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    price: number

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    qty: number
}

export class SplitBillBodyDto {
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(30)
    @ValidateNested()
    @Type(()=> SplitBillItemDto)
    items: SplitBillItemDto[]

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(30)
    tipPercent: number = 0
}

