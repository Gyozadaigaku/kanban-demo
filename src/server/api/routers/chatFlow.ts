import type { Chatflow } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const chatFlowRouter = createTRPCRouter({
  getAll: publicProcedure.query(async (): Promise<Chatflow> => {
    return await prisma.chatflow.findMany();
  }),
});
