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
import { UserProfileService } from "../userProfile.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Public } from "../../decorators/public.decorator";
import { UserProfileCreateInput } from "./UserProfileCreateInput";
import { UserProfileWhereInput } from "./UserProfileWhereInput";
import { UserProfileWhereUniqueInput } from "./UserProfileWhereUniqueInput";
import { UserProfileFindManyArgs } from "./UserProfileFindManyArgs";
import { UserProfileUpdateInput } from "./UserProfileUpdateInput";
import { UserProfile } from "./UserProfile";
import { SkillFindManyArgs } from "../../skill/base/SkillFindManyArgs";
import { Skill } from "../../skill/base/Skill";
import { SkillWhereUniqueInput } from "../../skill/base/SkillWhereUniqueInput";
import { ToolFindManyArgs } from "../../tool/base/ToolFindManyArgs";
import { Tool } from "../../tool/base/Tool";
import { ToolWhereUniqueInput } from "../../tool/base/ToolWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserProfileControllerBase {
  constructor(
    protected readonly service: UserProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserProfile })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: UserProfileCreateInput
  ): Promise<UserProfile> {
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        address: true,
        biography: true,
        contactEmail: true,
        createdAt: true,
        facebookUsername: true,
        githubUsername: true,
        hobby: true,
        id: true,
        instagramUsername: true,
        linkedinUsername: true,
        location: true,
        phoneNumber: true,
        quote: true,
        twitterUsername: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        whatsappUsernname: true,
        youtubeUsername: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserProfile] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(UserProfileFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<UserProfile[]> {
    const args = plainToClass(UserProfileFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        address: true,
        biography: true,
        contactEmail: true,
        createdAt: true,
        facebookUsername: true,
        githubUsername: true,
        hobby: true,
        id: true,
        instagramUsername: true,
        linkedinUsername: true,
        location: true,
        phoneNumber: true,
        quote: true,
        twitterUsername: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        whatsappUsernname: true,
        youtubeUsername: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: UserProfileWhereUniqueInput
  ): Promise<UserProfile | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        address: true,
        biography: true,
        contactEmail: true,
        createdAt: true,
        facebookUsername: true,
        githubUsername: true,
        hobby: true,
        id: true,
        instagramUsername: true,
        linkedinUsername: true,
        location: true,
        phoneNumber: true,
        quote: true,
        twitterUsername: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        whatsappUsernname: true,
        youtubeUsername: true,
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
    resource: "UserProfile",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: UserProfileWhereUniqueInput,
    @common.Body() data: UserProfileUpdateInput
  ): Promise<UserProfile | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          address: true,
          biography: true,
          contactEmail: true,
          createdAt: true,
          facebookUsername: true,
          githubUsername: true,
          hobby: true,
          id: true,
          instagramUsername: true,
          linkedinUsername: true,
          location: true,
          phoneNumber: true,
          quote: true,
          twitterUsername: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          whatsappUsernname: true,
          youtubeUsername: true,
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
    resource: "UserProfile",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: UserProfileWhereUniqueInput
  ): Promise<UserProfile | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address: true,
          biography: true,
          contactEmail: true,
          createdAt: true,
          facebookUsername: true,
          githubUsername: true,
          hobby: true,
          id: true,
          instagramUsername: true,
          linkedinUsername: true,
          location: true,
          phoneNumber: true,
          quote: true,
          twitterUsername: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          whatsappUsernname: true,
          youtubeUsername: true,
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

  @Public()
  @common.Get("/:id/skills")
  @ApiNestedQuery(SkillFindManyArgs)
  async findManySkills(
    @common.Req() request: Request,
    @common.Param() params: UserProfileWhereUniqueInput
  ): Promise<Skill[]> {
    const query = plainToClass(SkillFindManyArgs, request.query);
    const results = await this.service.findSkills(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/skills")
  async connectSkills(
    @common.Param() params: UserProfileWhereUniqueInput,
    @common.Body() body: SkillWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skills: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/skills")
  async updateSkills(
    @common.Param() params: UserProfileWhereUniqueInput,
    @common.Body() body: SkillWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skills: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/skills")
  async disconnectSkills(
    @common.Param() params: UserProfileWhereUniqueInput,
    @common.Body() body: SkillWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skills: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @Public()
  @common.Get("/:id/tools")
  @ApiNestedQuery(ToolFindManyArgs)
  async findManyTools(
    @common.Req() request: Request,
    @common.Param() params: UserProfileWhereUniqueInput
  ): Promise<Tool[]> {
    const query = plainToClass(ToolFindManyArgs, request.query);
    const results = await this.service.findTools(params.id, {
      ...query,
      select: {
        colored: true,
        createdAt: true,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/tools")
  async connectTools(
    @common.Param() params: UserProfileWhereUniqueInput,
    @common.Body() body: ToolWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tools: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/tools")
  async updateTools(
    @common.Param() params: UserProfileWhereUniqueInput,
    @common.Body() body: ToolWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tools: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/tools")
  async disconnectTools(
    @common.Param() params: UserProfileWhereUniqueInput,
    @common.Body() body: ToolWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tools: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
