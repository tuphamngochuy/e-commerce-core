import { ListQueryParam } from '@common/type/list';
import get from 'lodash/get';

export class ListDto {
  static toListParam(input: unknown): ListQueryParam {
    const take = get(input, 'size', 10);
    const skip = get(input, 'page', 1) - 1;

    return {
      take,
      skip,
    };
  }
}
