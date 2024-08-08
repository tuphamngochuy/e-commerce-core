import Yup from '@common/yup.custom';
import { TPersonInput } from '@entities/person.entity';

const { object, string } = Yup;

interface ICreatePersonWithMinimumData extends Pick<TPersonInput, 'fullName'> {}

const CREATE_PERSON_WITH_MINIMUM_DATA: Yup.ObjectSchema<ICreatePersonWithMinimumData> =
  object({
    fullName: string().required(),
  });

export class CreatePersonDto {
  static createPersonWithMinimumData(data: ICreatePersonWithMinimumData) {
    return CREATE_PERSON_WITH_MINIMUM_DATA.validateSync(data);
  }
}

export type TCreatePersonDto = ICreatePersonWithMinimumData;
