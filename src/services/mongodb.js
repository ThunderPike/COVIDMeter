import mongoose from 'mongoose';
import {
  MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DB, NODE_ENV,
} from '../config.js';

function getURLByEnv() {
  const env = NODE_ENV ?? 'local';

  switch (env) {
    case 'development':
      return `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.slqff.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`;
    default:
      return `mongodb://localhost:27017/${MONGODB_DB}`;
  }
}

async function main() {
  mongoose.set('debug', true);
  const url = getURLByEnv();
  await mongoose.connect(url);
}

main().catch((err) => console.log(err));

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB on ${MONGODB_DB}`);
});

mongoose.connection.on('error', (error) => {
  console.log(`Connection to MongoDB failed: ${error.message}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

mongoose.connection.on('close', () => {
  console.log('MongoDB connection closed');
});

export default mongoose;
