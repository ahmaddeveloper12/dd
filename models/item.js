// models/Item.js

import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: true },
  news: { type: String, required: true },
   imgUrl: { type: String, required: true },

}, { timestamps: true });

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
