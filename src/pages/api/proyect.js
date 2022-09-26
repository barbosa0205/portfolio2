import ProyectSchema from 'src/models/proyect'
import { dbConnect } from 'src/utils/mongoose'

export default async function handler(req, res) {
  const { method, query } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        if (query.searchBySkill) {
          const proyects = await ProyectSchema.find({
            technologies: query.searchBySkill,
          }).populate('technologies')

          res.status(200).json({
            data: proyects,
          })
        } else {
          const proyect = await ProyectSchema.findOne({
            _id: query.id,
          }).populate('technologies')

          res.status(200).json({
            data: proyect,
          })
        }
      } catch (err) {
        console.log('err', err)
        res.status(404).json({
          err,
        })
      }
      break
    default:
      res.status(404).send({
        error: 'Not Found',
      })
  }
}
