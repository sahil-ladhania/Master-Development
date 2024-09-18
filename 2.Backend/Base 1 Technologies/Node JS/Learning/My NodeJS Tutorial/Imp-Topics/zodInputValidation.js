/*

1. Using Input Validation Library - Using zod Library :
* Zod is a TypeScript-first schema declaration and validation library.

-----Code Example-----
const { z } = require('zod');
app.use(express.json());
const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  try {
    loginSchema.parse({ username, password });
    // Proceed with authentication logic
    // ...
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input.', details: error.errors });
  }
});

2. Why zod ?
* Provides a concise and expressive way to define data validation schemas.
* Strong typing benefits in TypeScript projects.

3. zod Overview :
* Basic Types
* Object Schema
* Nested Schemas
* Array Schema
* Union & Intersection Types
* Optional & Nullable
* Custom Validators
* Parsing & Validation

4. zod Basic Types :
* zod provides basic types like ---> string , number , boolean , null , undefined , etc...

-----Syntax-----
const schema = z.string();

5. zod Object Schema :
* You can define the structure of an object using the object method and specify the shape of its properties.

-----Syntax-----
const userSchema = z.object({
  username: z.string(),
  age: z.number(),
});

6. zod Nested Schema :
* You can nest schemas within each other to create more complex structures.

-----Syntax-----
const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
});
const userSchema = z.object({
  username: z.string(),
  address: addressSchema,
});

7. zod Array Schema :
* You can define the schema for arrays using the array method.

-----Syntax-----
const numbersSchema = z.array(z.number());

8. zod Union & Intersection Types :
* Zod supports union and intersection types for more flexibility.

-----Syntax-----
const numberOrStringSchema = z.union([z.number(), z.string()]);
const combinedSchema = z.intersection([userSchema, addressSchema]);

9. zod Optional and Nullable :
* You can make properties optional or nullable using optional and nullable methods.

-----Syntax-----
const userSchema = z.object({
  username: z.string(),
  age: z.optional(z.number()),
  email: z.nullable(z.string()),
});

10. zod Custom Validators :
* Zod allows you to define custom validation logic using the refine method.

-----Syntax-----
const positiveNumberSchema = z.number().refine((num) => num > 0, {
  message: 'Number must be positive',
});

11. zod Parsing and Validation :
* To validate and parse data, use the parse method. 
* If the data is invalid, it throws an error with details about the validation failure.

-----Syntax-----
try {
  const userData = userSchema.parse({
    username: 'john_doe',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'Exampleville',
    },
  });
  console.log('Parsed data:', userData);
} catch (error) {
  console.error('Validation error:', error.errors);
}

*/