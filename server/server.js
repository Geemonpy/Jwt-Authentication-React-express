const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;





  if (email === 'geemondas@gmail.com' && password === '2255') {
    const token = jwt.sign({ email }, secretKey);

    res.status(200).json({ token });
    console.log({token})

  } else {
    res.status(401).json({ error: 'Invalid' });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
