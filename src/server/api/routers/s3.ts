import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { TRPCError } from "@trpc/server";

export const s3Router = createTRPCRouter({
  getPresignedImages: publicProcedure.query(async ({ ctx }) => {
    const { s3 } = ctx;

    const listObjectsOutput = await s3.listObjectsV2({
      Bucket: "kovtun-property-photos",
    });

    console.log(listObjectsOutput);

    const keysArr = listObjectsOutput.Contents!.map((element) => {
      return element.Key;
    });

    console.log(keysArr);
    const jsonKeys = JSON.stringify(keysArr);
    console.log(jsonKeys);

    const signedList = keysArr.map(async (key) => {
      const getObjectCommand = new GetObjectCommand({
        Bucket: "kovtun-property-photos",
        Key: key,
      });
      return await getSignedUrl(s3, getObjectCommand);
    });

    return (await Promise.all(signedList)) ?? [];
  }),

  getStandardUploadPresignedUrl: publicProcedure
    .input(z.object({ key: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { key } = input;
      const { s3 } = ctx;

      const putObjectCommand = new PutObjectCommand({
        Bucket: "kovtun-property-photos",
        Key: key,
      });

      return await getSignedUrl(s3, putObjectCommand);
    }),
});
