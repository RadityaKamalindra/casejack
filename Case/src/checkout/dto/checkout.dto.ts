import { Transform, Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength, ValidateNested } from "class-validator";

export enum couponType {
    'HEMAT10',
    'HEMAT20',
    'FREESHIP'
}

export class checkoutQueryDto {
    @IsOptional()
    @Transform(({ value }) => {
    if (value === undefined) return false;
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
    })
    member: boolean 

    @IsOptional()
    @IsEnum(couponType)
    coupon?: string
}

export class bodyItemDto {
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

export class checkoutBodyDto {
    @IsArray()
    @IsNotEmpty()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @ValidateNested()
    @Type(()=> bodyItemDto)
    items: bodyItemDto[]
}

