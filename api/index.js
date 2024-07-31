import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });