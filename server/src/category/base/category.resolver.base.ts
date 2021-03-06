/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCategoryArgs } from "./CreateCategoryArgs";
import { UpdateCategoryArgs } from "./UpdateCategoryArgs";
import { DeleteCategoryArgs } from "./DeleteCategoryArgs";
import { CategoryFindManyArgs } from "./CategoryFindManyArgs";
import { CategoryFindUniqueArgs } from "./CategoryFindUniqueArgs";
import { Category } from "./Category";
import { ArticleFindManyArgs } from "../../article/base/ArticleFindManyArgs";
import { Article } from "../../article/base/Article";
import { ProjectFindManyArgs } from "../../project/base/ProjectFindManyArgs";
import { Project } from "../../project/base/Project";
import { CategoryService } from "../category.service";

@graphql.Resolver(() => Category)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CategoryResolverBase {
  constructor(
    protected readonly service: CategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _categoriesMeta(
    @graphql.Args() args: CategoryFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @Public()
  @graphql.Query(() => [Category])
  async categories(
    @graphql.Args() args: CategoryFindManyArgs
  ): Promise<Category[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Category, { nullable: true })
  async category(
    @graphql.Args() args: CategoryFindUniqueArgs
  ): Promise<Category | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "create",
    possession: "any",
  })
  async createCategory(
    @graphql.Args() args: CreateCategoryArgs
  ): Promise<Category> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "update",
    possession: "any",
  })
  async updateCategory(
    @graphql.Args() args: UpdateCategoryArgs
  ): Promise<Category | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "delete",
    possession: "any",
  })
  async deleteCategory(
    @graphql.Args() args: DeleteCategoryArgs
  ): Promise<Category | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => [Article])
  async articles(
    @graphql.Parent() parent: Category,
    @graphql.Args() args: ArticleFindManyArgs
  ): Promise<Article[]> {
    const results = await this.service.findArticles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Project])
  async projects(
    @graphql.Parent() parent: Category,
    @graphql.Args() args: ProjectFindManyArgs
  ): Promise<Project[]> {
    const results = await this.service.findProjects(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
