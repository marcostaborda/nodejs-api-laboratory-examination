import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { typeExaminations } from 'App/Utils'

export class StoreValidator {
	constructor(protected ctx: HttpContextContract) {
	}
	public schema = schema.create({
		name: schema.string({ trim: true }),
		type_exam: schema.enum(typeExaminations)
	})
	public messages = {}
}
