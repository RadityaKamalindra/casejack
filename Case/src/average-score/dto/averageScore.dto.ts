import { ArrayMaxSize, ArrayMinSize, IsArray, IsNumber, IsOptional, Max, Min } from "class-validator";

export class AverageScoreDto {
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @IsNumber({}, {each: true})
    @Min(0, {each: true})
    @Max(100, {each: true})
    scores: number[]

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(100)
    passmark: number = 70
}