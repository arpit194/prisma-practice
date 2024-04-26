import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //  Delete Query
  //   await prisma.user.deleteMany();
  //  Create Query
  //   const user = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "Arpit",
  //         email: "arpit.patel194@gmail.com",
  //         age: 27,
  //       },
  //       {
  //         name: "Saloni",
  //         email: "saloni.patidar@gmail.com",
  //         age: 25,
  //       },
  //     ],
  //   });
  //   console.log(user);
  //  Find Unique Query
  //   const user = await prisma.user.findUnique({
  //     where: {
  //       email: "arpit.patel194@gmail.com",
  //       //   age_name: {
  //       //     age: 27,
  //       //     name: "Arpit",
  //       //   },
  //     },
  //   });
  //   console.log(user);
  //  Find Many Query
  //   const users = await prisma.user.findMany({
  //     where: {
  //       name: "Arpit",
  //     },
  //     orderBy: {
  //       age: "asc",
  //     },
  //     // distinct: ["name", "age"],
  //     // take: 10,
  //     // skip: 5,
  //   });
  //   console.log(users);
  //   const users = await prisma.user.findMany({
  //     where: {
  //     //   AND: [
  //     //     { name: { in: ["Arpit", "Saloni"] } },
  //     //     { email: { contains: "sal" } },
  //     //   ],
  //       name: { in: ["Arpit", "Saloni"] },
  //       //   email: { contains: "sal" },
  //       //   name: { equals: "Arpit" },
  //       //   name: { not: "Arpit" },
  //       //   age: { lt: 26 },
  //     },
  //   });
  //   console.log(users);
  //  Relationship Query
  //   const users = await prisma.user.findMany({
  //     where: {
  //       userPreference: {
  //         emailUpdates: true,
  //       },
  //       writtenPosts: {
  //         every: {
  //           title: "test",
  //         },
  //       },
  //     },
  //   });
  //   console.log(users);
  //   const posts = await prisma.post.findMany({
  //     where: {
  //       author: {
  //         is: {
  //           name: "Arpit",
  //         },
  //       },
  //     },
  //   });
  //   console.log(posts);
  // Update Query
  //   const res = await prisma.user.update({
  //     data: {
  //       role: "ADMIN",
  //       //   age: {
  //       //     increment: 1,
  //       //   },
  //       userPreference: {
  //         // create: {
  //         //   emailUpdates: true,
  //         // },
  //         // disconnect: true,
  //         connect: {
  //           id: "5246ca30-629d-48a4-a37d-fa8d3c035882",
  //         },
  //       },
  //     },
  //     where: {
  //       id: "0fdbdb6a-80c1-43fd-b5e5-c222a83453e0",
  //     },
  //   });
  //   console.log(res);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
