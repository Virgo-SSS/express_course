import { prismaClient } from "../src/databases/client/prisma-client.js"


describe("Test can insert data to user table", () => {
    it("Should insert one user", async () => {
        const name = "Zumbul";
        const email = "zumbul@gmail.com";

        const impacted = await prismaClient.$executeRaw `INSERT INTO users(name, email) VALUES (${name}, ${email})`;

        expect(impacted).toBe(1)

    });
});

