import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const propertyRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const properties = await ctx.db.property.findMany();
    return properties;
  }),

  postProperty: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).max(20),
        address: z.string(),
        price: z.string(),
        description: z.string(),
        telephone: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      const post = await ctx.db.property.create({
        data: {
          name: input.name,
          address: input.address,
          price: input.price,
          description: input.description,
          telephone: input.telephone,
          userId,
        },
      });
      return post;
    }),

  deleteProperty: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.property.delete({
        where: {
          id: input.id,
        },
      });
    }),
});