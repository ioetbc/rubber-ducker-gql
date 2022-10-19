import {PrismaClient} from "@prisma/client";
import {User} from "../generated/graphql-backend";

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
    findUsers: async (): Promise<User[]> => {
      const filters = ["react", "node"];
      const gmm = await prisma.technology.groupBy({
        by: ["userId"],

        _count: true,
        where: {
          technology: {
            in: filters,
          },
        },
      });

      const filtered = gmm
        .filter((item) => item._count === filters.length)
        .map((item) => item.userId) as number[];

      const users = prisma.user.findMany({
        where: {
          id: {
            in: filtered,
          },
        },
      });

      return users;
    },
  },
};
