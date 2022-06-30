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
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreateCommentArgs } from "./CreateCommentArgs";
import { UpdateCommentArgs } from "./UpdateCommentArgs";
import { DeleteCommentArgs } from "./DeleteCommentArgs";
import { CommentFindManyArgs } from "./CommentFindManyArgs";
import { CommentFindUniqueArgs } from "./CommentFindUniqueArgs";
import { Comment } from "./Comment";
import { Article } from "../../article/base/Article";
import { User } from "../../user/base/User";
import { CommentService } from "../comment.service";

@graphql.Resolver(() => Comment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CommentResolverBase {
  constructor(
    protected readonly service: CommentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _commentsMeta(
    @graphql.Args() args: CommentFindManyArgs
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
  @graphql.Query(() => [Comment])
  async comments(
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Comment, { nullable: true })
  async comment(
    @graphql.Args() args: CommentFindUniqueArgs
  ): Promise<Comment | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Comment)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "create",
    possession: "any",
  })
  async createComment(
    @graphql.Args() args: CreateCommentArgs
  ): Promise<Comment> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        article: args.data.article
          ? {
              connect: args.data.article,
            }
          : undefined,

        author: args.data.author
          ? {
              connect: args.data.author,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Comment)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "update",
    possession: "any",
  })
  async updateComment(
    @graphql.Args() args: UpdateCommentArgs
  ): Promise<Comment | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          article: args.data.article
            ? {
                connect: args.data.article,
              }
            : undefined,

          author: args.data.author
            ? {
                connect: args.data.author,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Comment)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "delete",
    possession: "any",
  })
  async deleteComment(
    @graphql.Args() args: DeleteCommentArgs
  ): Promise<Comment | null> {
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
  @graphql.ResolveField(() => Article, { nullable: true })
  async article(@graphql.Parent() parent: Comment): Promise<Article | null> {
    const result = await this.service.getArticle(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async author(@graphql.Parent() parent: Comment): Promise<User | null> {
    const result = await this.service.getAuthor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
