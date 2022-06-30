/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SkillService } from "../skill.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Public } from "../../decorators/public.decorator";
import { SkillCreateInput } from "./SkillCreateInput";
import { SkillWhereInput } from "./SkillWhereInput";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";
import { SkillFindManyArgs } from "./SkillFindManyArgs";
import { SkillUpdateInput } from "./SkillUpdateInput";
import { Skill } from "./Skill";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SkillControllerBase {
  constructor(
    protected readonly service: SkillService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Skill",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Skill })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: SkillCreateInput): Promise<Skill> {
    return await this.service.create({
      data: {
        ...data,

        userProfile: data.userProfile
          ? {
              connect: data.userProfile,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        experience: true,
        icon: true,
        id: true,
        name: true,
        updatedAt: true,

        userProfile: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Skill] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(SkillFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Skill[]> {
    const args = plainToClass(SkillFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        experience: true,
        icon: true,
        id: true,
        name: true,
        updatedAt: true,

        userProfile: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Skill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SkillWhereUniqueInput
  ): Promise<Skill | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        experience: true,
        icon: true,
        id: true,
        name: true,
        updatedAt: true,

        userProfile: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Skill",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Skill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SkillWhereUniqueInput,
    @common.Body() data: SkillUpdateInput
  ): Promise<Skill | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          userProfile: data.userProfile
            ? {
                connect: data.userProfile,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          experience: true,
          icon: true,
          id: true,
          name: true,
          updatedAt: true,

          userProfile: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Skill",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Skill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SkillWhereUniqueInput
  ): Promise<Skill | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          experience: true,
          icon: true,
          id: true,
          name: true,
          updatedAt: true,

          userProfile: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
