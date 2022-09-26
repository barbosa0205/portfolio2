import { Schema, model, models } from 'mongoose'

const ProyectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  technologies: [{ type: Schema.Types.ObjectId, ref: 'Technology' }],
  repo: {
    type: String,
    required: true,
  },
  web: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  longDesc: {
    type: String,
  },
  images: [{ type: String }],
})

//cacheed
module.exports = models?.Proyect || model('Proyect', ProyectSchema)
