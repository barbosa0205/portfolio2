import ProyectSchema from 'src/models/proyect'
import { dbConnect } from 'src/utils/mongoose'

export default async function handler(req, res) {
  const { method, query } = req
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const proyects = await ProyectSchema.find({}).populate('technologies')
        res.status(200).send({
          data: proyects,
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
