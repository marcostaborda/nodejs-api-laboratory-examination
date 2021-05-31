import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Examination } from 'App/Models'

export default class ExaminationsLaboratoriesController {
  public async index({ request }: HttpContextContract) {
    const searchName = request.input('name')

    const examination = await Examination.query().where('name', 'like', `%${searchName}%`).preload('laboratories').firstOrFail()

    return examination.laboratories
  }
}
