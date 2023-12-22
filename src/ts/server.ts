import express from 'express';
import { projectRouter } from './projects';

const app = express();

app.use(express.json());
app.use('/projects', projectRouter);

async function startServer() {
  try {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();
