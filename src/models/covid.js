import mongoose from '../services/mongodb.js';

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model('Kitten', kittySchema);

async function test() {
  const t = await Kitten.find({});
  console.log(t);
}

test();
