import Joi from "joi";

describe('Validation using object', () => { 
    it("Should can validation using joi object", () => {
        const schema = Joi.object({
            name: Joi.string().min(5).max(10),
            email: Joi.string().email(),
        })

        const data = {
            name: "Test 123456",
            email: "test"
        }

        const result = schema.validate(data);

        if(result.error) {
            result.error.details.forEach((detail) => {
                console.info(`Message : ${detail.message}`);
            })
        }
    });
})