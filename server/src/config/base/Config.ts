/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumConfigColorSchema } from "./EnumConfigColorSchema";
import {
  IsEnum,
  IsOptional,
  IsDate,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumConfigLanguage } from "./EnumConfigLanguage";
import { User } from "../../user/base/User";
@ObjectType()
class Config {
  @ApiProperty({
    required: false,
    enum: EnumConfigColorSchema,
  })
  @IsEnum(EnumConfigColorSchema)
  @IsOptional()
  @Field(() => EnumConfigColorSchema, {
    nullable: true,
  })
  colorSchema?: "dark" | "light" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumConfigLanguage,
  })
  @IsEnum(EnumConfigLanguage)
  @IsOptional()
  @Field(() => EnumConfigLanguage, {
    nullable: true,
  })
  language?: "id_ID" | "en_US" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User;
}
export { Config };