import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Examination, Laboratory } from 'App/Models'

export default class ExaminationLaboratoriesController {
  public async update({ params, response }: HttpContextContract) {
    const { examinationId, laboratoryId } = params

    const examination = await Examination.query().where('id', examinationId).andWhere('isActive', true).first()
    const lab = await Laboratory.query().where('id', laboratoryId).andWhere('isActive', true).first()

    if (!examination)
      return response.notFound({ message: 'examination is not found' })

    if (!lab)
      return response.notFound({ message: 'laboratory is not found' })

    await examination.related('laboratories').attach([lab.id])
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { examinationId, laboratoryId } = params

    const examination = await Examination.query().where('id', examinationId).andWhere('isActive', true).first()
    const lab = await Laboratory.query().where('id', laboratoryId).andWhere('isActive', true).first()

    if (!examination)
      return response.notFound({ message: 'examination is not found' })

    if (!lab)
      return response.notFound({ message: 'laboratory is not found' })

    await examination.related('laboratories').detach([lab.id])
  }
}
