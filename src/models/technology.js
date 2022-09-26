import { Schema, model, models } from 'mongoose'

const TechnologySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
})

//cacheed
module.exports = models?.Technology || model('Technology', TechnologySchema)
