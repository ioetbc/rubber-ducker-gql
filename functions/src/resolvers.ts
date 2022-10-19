import {PrismaClient} from "@prisma/client";
import {User, Technology} from "../generated/graphql-backend";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: (): Promise<User | null> => {
      return prisma.user.findFirst({
        where: {
          username: "will",
        },
      });
    },
    technology: async (): Promise<Technology[]> => {
      const gmm = await prisma.technology.findMany({
        where: {
          OR: [
            {
              technology: "react",
              proficiency: 10,
            },
            {
              technology: "hello",
              proficiency: 8,
            },
          ],
        },
        include: {
          User: {
            select: {
              username: true,
              githubURL: true,
            },
          },
        },
      });

      console.log("wtf", gmm);

      return gmm;
    },
  },
};
