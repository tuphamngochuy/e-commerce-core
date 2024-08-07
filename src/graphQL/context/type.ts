import { Platform } from '@enums/common';
import { UUID } from 'crypto';
import { Logger } from 'winston';

export type Context = {
  requestId: UUID;
  logger: Logger;
  platform: Platform;
  userId?: UUID;
};
