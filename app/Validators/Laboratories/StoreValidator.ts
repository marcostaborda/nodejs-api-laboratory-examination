import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
	constructor(protected ctx: HttpContextContract) { }

	public schema = schema.create({
		name: schema.string({ trim: true }),
		address: schema.string({ trim: true })
	})

	public messages = {}
}
