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

  getPropertyById: publicProcedure
  .input(z.string())
  .query(async ({ input, ctx }) => {
    const properties = await ctx.db.property.findFirst({
      where: {
        id: input,
      },
    });
    return properties;
  }),

  getSearched: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const properties = await ctx.db.property.findMany();
      const searchedProperties = properties.filter((property) => {
        return (
          property.name.includes(input) ||
          property.address.includes(input) ||
          property.description.includes(input) ||
          property.price.includes(input)
        );
      });
      return searchedProperties;
    }),

  getFeatured: publicProcedure
    .query(async ({ ctx }) => {
      const properties = await ctx.db.property.findMany({
        where: {
          featured: true,
        }
      });
      return properties;
    }),

  postProperty: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).max(225),
        address: z.string(),
        price: z.string(),
        description: z.string(),
        images: z.string(),
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
          images: input.images,
          userId,
        },
      });
      return post;
    }),
  modifyProperty: protectedProcedure
  .input(z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    address: z.string(),
  }))
  .mutation(async ({ ctx, input }) => {
    return await ctx.db.property.update({
      where: {
        id: input.id,
      },
      data: {
        name: input.name,
        description: input.description,
        address: input.address,
      }
    })
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
