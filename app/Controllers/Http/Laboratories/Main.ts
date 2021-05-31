import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/Laboratories'

import { Laboratory } from 'App/Models'

export default class LaboratoryController {
  public async index() {
    const labs = await Laboratory.query().where('isActive', true)

    return labs
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const lab = await Laboratory.create(data)

    return lab
  }

  public async show({ params, response }: HttpContextContract) {
    const lab = await Laboratory.find(params.id)

    if (!lab)
      return response.notFound({ message: 'laboratory is no found' })

    return lab
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const lab = await Laboratory.findOrFail(params.id)

    lab.merge(data)

    await lab.save()

    return lab
  }

  public async destroy({ params, response }: HttpContextContract) {
    const lab = await Laboratory.find(params.id)

    if (!lab)
      return response.notFound({ message: 'laboratory is no found' })

    lab.isActive = false

    await lab.save()
  }
}
