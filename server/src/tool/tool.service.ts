import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ToolServiceBase } from "./base/tool.service.base";

@Injectable()
export class ToolService extends ToolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
