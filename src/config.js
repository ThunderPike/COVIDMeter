import 'dotenv/config';

const PORT = process.env.PORT || 5000;

const {
  MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DB, NODE_ENV,
} = process.env;

export {
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_DB,
  NODE_ENV,
  PORT,
};
