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
import { CommentListRelationFilter } from "../../comment/base/CommentListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ConfigWhereUniqueInput } from "../../config/base/ConfigWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../../project/base/ProjectListRelationFilter";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";
@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => CommentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommentListRelationFilter)
  @IsOptional()
  @Field(() => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ConfigWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConfigWhereUniqueInput)
  @IsOptional()
  @Field(() => ConfigWhereUniqueInput, {
    nullable: true,
  })
  config?: ConfigWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProjectListRelationFilter)
  @IsOptional()
  @Field(() => ProjectListRelationFilter, {
    nullable: true,
  })
  starredProjects?: ProjectListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => UserProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => UserProfileWhereUniqueInput, {
    nullable: true,
  })
  userProfile?: UserProfileWhereUniqueInput;
}
export { UserWhereInput };
