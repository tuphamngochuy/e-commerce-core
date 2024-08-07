import { Platform } from '@enums/common';
import { SystemRoleType } from '@enums/role';

const ROLE_AND_PLATFORM_MAP = {
  [Platform.CONSUMER_APP]: [SystemRoleType.BUYER],
  [Platform.STORE_MANAGEMENT]: [SystemRoleType.ADMIN, SystemRoleType.SELLER],
};

export class UserDto {
  public static fromPlatformToAcceptedRoles(
    platform: Platform,
  ): SystemRoleType[] {
    return ROLE_AND_PLATFORM_MAP[platform];
  }
}
