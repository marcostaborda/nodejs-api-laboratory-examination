import { BaseModel, ManyToMany, manyToMany, column } from '@ioc:Adonis/Lucid/Orm'

import { TypeExamination } from 'App/Utils'
import { Laboratory } from 'App/Models'

export default class Examination extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public typeExam: TypeExamination

  @column()
  public isActive: boolean

  @manyToMany(() => Laboratory)
  public laboratories: ManyToMany<typeof Laboratory>
}
