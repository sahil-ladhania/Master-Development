/*

1. What is Input Validation ?
* Input validation is a crucial aspect of securing your application. 
* It helps ensure that the data received by your server is in the expected format and meets certain criteria.

2. Ways of Input Validation :
* Native Way ---> Using Multiple If-Else Statements.
* Using Input Validation Library ---> Using zod Library.

3. Native Way - Using Multiple If-Else Statements :

-----Code Example-----
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || typeof username !== 'string' || username.length < 3 ||
      !password || typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ error: 'Invalid input.' });
  }
  // Proceed with authentication logic
  // ...
  res.json({ success: true });
});

*/