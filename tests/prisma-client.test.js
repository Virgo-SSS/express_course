import { PrismaClient } from "@prisma/client";

describe("Test prisma client connection", () => {
    it("Should be connect to the database", async () => {
        const prisma = new PrismaClient();

        prisma.$connect();


        prisma.$disconnect();
    })
})