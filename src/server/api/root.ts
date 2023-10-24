import { exampleRouter } from "~/server/api/routers/example";
import { propertyRouter } from "~/server/api/routers/properties";
import { createTRPCRouter } from "~/server/api/trpc";
import { s3Router } from "./routers/s3";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  property: propertyRouter,
  s3: s3Router,
});

// export type definition of API
export type AppRouter = typeof appRouter;
