import Joi from "joi"

describe('Validation', () => { 
    it("should be able can validate", () => {
        const schema = Joi.string().min(3);

        const result = schema.validate("Hasdf");

        if(result.error) {
            console.info(result.error);
        }
    })
})
