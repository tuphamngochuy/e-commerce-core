import { registerEnumType } from 'type-graphql';

export enum BiologicalSex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

registerEnumType(BiologicalSex, {
  name: 'BiologicalSex',
});

export enum MaritalStatus {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  DIVORCED = 'DIVORCED',
}

registerEnumType(MaritalStatus, {
  name: 'MaritalStatus',
});
