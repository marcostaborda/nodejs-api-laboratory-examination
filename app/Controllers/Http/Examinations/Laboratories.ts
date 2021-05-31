import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Examination } from 'App/Models'

export default class ExaminationsLaboratoriesController {
  public async index({ request, response }: HttpContextContract) {
    const searchName = request.input('name')

    console.log(searchName)
    const examination = await Examination.query().where('name', 'like', `%${searchName}%`).preload('laboratories')
      .first()

    if (!examination)
      return response.notFound({ message: 'examination is not found' })

    return examination.laboratories
  }
}
