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
import { ArticleWhereUniqueInput } from "../../article/base/ArticleWhereUniqueInput";
import { ValidateNested, IsOptional, IsJSON } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
@InputType()
class CommentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ArticleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ArticleWhereUniqueInput)
  @IsOptional()
  @Field(() => ArticleWhereUniqueInput, {
    nullable: true,
  })
  article?: ArticleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  author?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  body?: InputJsonValue;
}
export { CommentUpdateInput };
