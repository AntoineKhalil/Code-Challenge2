import * as mongoose from 'mongoose';

export const ComplaintSchema = new mongoose.Schema({
  title: String,
  body: String,
  status: String,
  creationDate: Date,
});
