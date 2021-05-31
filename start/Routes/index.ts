import Route from '@ioc:Adonis/Core/Route'

Route.resource('examinations', 'Main').apiOnly()

Route.patch('examinations/:examinationId/laboratories/:laboratoryId', 'ExaminationLaboratories.update')
  .as('examinations.associate.laboratories')
Route.delete('examinations/:examinationId/laboratories/:laboratoryId', 'ExaminationLaboratories.destroy')
  .as('examinations.disassociate.laboratories')

Route.get('examinations/laboratories', 'Laboratories.index')

Route.resource('laboratories', 'Main').apiOnly()
