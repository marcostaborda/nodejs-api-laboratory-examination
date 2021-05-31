import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/Examinations'

import { Examination } from 'App/Models'

export default class ExaminationController {
  public async index() {
    const examinations = await Examination.query().where('isActive', true)

    return examinations
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const examination = await Examination.create(data)

    return examination
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const lab = await Examination.findOrFail(params.id)

      return lab
    } catch {
      return response.notFound({ message: 'examination is not found' })
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    try {
      const examination = await Examination.findOrFail(params.id)

      examination.merge(data)

      await examination.save()

      return examination
    } catch (error) {
      return response.notFound({ message: 'examination is not found' })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const lab = await Examination.findOrFail(params.id)

      lab.isActive = false

      await lab.save()
    } catch (error) {
      return response.notFound({ message: 'examination is not found' })
    }
  }
}
