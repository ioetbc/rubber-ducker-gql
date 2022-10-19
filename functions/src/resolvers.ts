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
    findUsers: async (): Promise<any> => {
      const tings = ["react", "node"];
      const gmm = await prisma.technology.findMany({
        where: {
          OR: [
            {
              technology: "react",
              proficiency: {
                gte: 5,
              },
            },
            {
              technology: "node",
              proficiency: {
                gte: 5,
              },
            },
          ],
        },
        orderBy: {
          proficiency: "desc",
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

      // merge array where userId is the same
      // const merged = gmm.reduce((acc, cur) => {
      //   const existing = acc.find((item) => item.userId === cur.userId);
      //   if (existing) {
      //     existing.score += 1;
      //   } else {
      //     acc.push(cur);
      //   }
      //   return acc;
      // }, []);

      // console.log("ayyy", merged);

      // const sumProficiencies = gmm.reduce((acc, curr) => {
      //   const found = acc.find((el) => el.userId === curr.userId);
      //   if (found) {
      //     const score = (found.proficiency += curr.proficiency);
      //     found.score = score;
      //   } else {
      //     acc.push(curr);
      //   }
      //   return acc;
      // }, []);

      // // sort by proficiency
      // const sortedProficiencies = sumProficiencies.sort(
      //   (a, b) => b.proficiency - a.proficiency
      // );

      // console.log("sumProficiencies", sumProficiencies);

      return gmm;
    },
  },
};
