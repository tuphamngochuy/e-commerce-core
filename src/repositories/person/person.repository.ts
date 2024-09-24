import { Person } from '@entities/actualEntities/person.entity';
import { TCreatePersonDto } from '@repositories/person/dto/createPerson.dto';
import dataSource from '@typeORM/dataSource';
import { Repository } from 'typeorm';

export class PersonRepository extends Repository<Person> {
  createPerson(createDto: TCreatePersonDto) {
    return this.insert(createDto);
  }
}

export const personRepository = new PersonRepository(
  Person,
  dataSource.manager,
);
