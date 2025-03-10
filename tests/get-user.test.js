import { prismaClient } from "../src/databases/client/prisma-client.js"

describe("Test to get user data", () => {
    it("Should return all users", async () => {

        const users = await prismaClient.$queryRaw `SELECT * from users`

        for (const user of users) {
            console.info(`Name user : ${user.name} and id : ${user.id} `);
        }
    });
});