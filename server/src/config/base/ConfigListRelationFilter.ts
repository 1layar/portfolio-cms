/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConfigWhereInput } from "./ConfigWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ConfigListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => ConfigWhereInput)
  @IsOptional()
  @Field(() => ConfigWhereInput, {
    nullable: true,
  })
  every?: ConfigWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => ConfigWhereInput)
  @IsOptional()
  @Field(() => ConfigWhereInput, {
    nullable: true,
  })
  some?: ConfigWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => ConfigWhereInput)
  @IsOptional()
  @Field(() => ConfigWhereInput, {
    nullable: true,
  })
  none?: ConfigWhereInput;
}
export { ConfigListRelationFilter };
