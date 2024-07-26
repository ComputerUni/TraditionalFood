const express = require("express");
const pgp = require('pg-promise')();

const app = express();

app.use(express.json())

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'deneme',
    user: 'postgres',       
    password: 'Ki21022023'           
});



app.get('/deneme/users', async (req, res) => {
  try {
      const users = await db.any('SELECT * FROM users');
      res.json(users);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Veritabanı hatası' });
  }
});


app.post('/deneme/users', async (req, res) => {
  const {id, name, email, role} = req.body;
  try {
      const newUser = await db.one(
          'INSERT INTO users (id, name, email, role) VALUES ($1, $2, $3) RETURNING *',
          [id, name, email, role]
      );
      res.status(201).json(newUser);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Kullanıcı ekleme hatası' });
  }
});


const port = 3000;

const start = async () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();
