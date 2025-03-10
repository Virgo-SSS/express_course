import { prismaClient } from "../src/databases/client/prisma-client";

describe("CRUD User", () => {
    it("should be able to create user", async () => {
        const user = await prismaClient.user.create({
            data: {
                name: "Virgo Stevanus",
                email: "virgo123@gmail.com"
            }
        })

        expect(user.name).toBe("Virgo Stevanus");
        expect(user.email).toBe("virgo123@gmail.com");
    });
})