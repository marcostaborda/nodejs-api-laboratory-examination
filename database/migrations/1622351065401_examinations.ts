import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Examinations extends BaseSchema {
  protected tableName = 'examinations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.enu('type_exam', ['analise_clinica', 'imagem'])
      table.boolean('is_active').defaultTo(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
