import TechnologySchema from 'src/models/technology'
import { dbConnect } from 'src/utils/mongoose'

export default async function handler(req, res) {
  const { method, query } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const technologies = await TechnologySchema.find({})
        res.status(200).send({
          data: technologies,
        })
      } catch (err) {
        console.log(err)
      }
      break
    default:
      res.status(404).send({
        error: 'Not Found',
      })
  }
}