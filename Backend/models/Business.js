import mongoose from 'mongoose';

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 60 }, // Cambiar a 'name' en lugar de 'title'
  description: { type: String, required: true, maxlength: 200 },
  bannerImg: { type: String, required: true },
  profileImg: { type: String, required: true },
  category: { type: String, required: true }, // Nueva propiedad para la categoría del negocio
  // Eliminado 'price' y 'prices'
  // Eliminada la propiedad 'extraOptions'
  // Agregamos referencias a News y Product
  news: [{ type: mongoose.Schema.Types.ObjectId, ref: 'News' }],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
}, { timestamps: true });

export default mongoose.models.Business || mongoose.model('Business', businessSchema);
