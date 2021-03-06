/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Config, User } from "@prisma/client";

export class ConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ConfigFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigFindManyArgs>
  ): Promise<number> {
    return this.prisma.config.count(args);
  }

  async findMany<T extends Prisma.ConfigFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigFindManyArgs>
  ): Promise<Config[]> {
    return this.prisma.config.findMany(args);
  }
  async findOne<T extends Prisma.ConfigFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigFindUniqueArgs>
  ): Promise<Config | null> {
    return this.prisma.config.findUnique(args);
  }
  async create<T extends Prisma.ConfigCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigCreateArgs>
  ): Promise<Config> {
    return this.prisma.config.create<T>(args);
  }
  async update<T extends Prisma.ConfigUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigUpdateArgs>
  ): Promise<Config> {
    return this.prisma.config.update<T>(args);
  }
  async delete<T extends Prisma.ConfigDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigDeleteArgs>
  ): Promise<Config> {
    return this.prisma.config.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.config
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
