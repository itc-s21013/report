import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import students from 'App/Models/students'

export default class studentsSeeder extends BaseSeeder {
  public async run () {
    await students.createMany([
      {
        code: 's20000',
        name: 'taro',
      },
      {
        code: 's20001',
        name: 'hanako',
      },
    ])
  }
}
