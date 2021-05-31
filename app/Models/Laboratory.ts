import { BaseModel, ManyToMany, manyToMany, column } from '@ioc:Adonis/Lucid/Orm'

import { Examination } from 'App/Models'

export default class Laboratory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public address: string

  @column({ serializeAs: null })
  public isActive: boolean

  @manyToMany(() => Examination)
  public examinations: ManyToMany<typeof Examination>
}
