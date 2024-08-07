export interface IError {
  code: string;
  name: string;
}

/**
 * Error Class 400xxx: Bad Request
 * Usage: For errors related to users' input
 */

export const BAD_REQUEST: IError = {
  code: '400000',
  name: 'BAD_REQUEST',
};

export const INVALID_SYSTEM_ROLE: IError = {
  code: '400001',
  name: 'INVALID_SYSTEM_ROLE',
};

/**
 * Error Class 401xxx: Unauthorized
 * Usage: For errors related to users' credentials, expired sessions...
 */

/**
 * Error Class 402xxx: Permission Denied
 * Usage: For errors related to users' missing permissions, missing visibility, wrong company role...
 */

/**
 * Error Class 403xxx: Forbidden
 * Usage: For errors related to status of target entity (close, locked...),
 * prevent it from taking some actions (update, activate...)
 */

/**
 * Error Class 404xxx: Not found
 * Usage: For errors related to existence of entities
 */

/**
 * Error Class 405xxx: System Protection
 * Usage: For errors related to system limitation like rate limit, size limit, some hard constraint...
 */

/**
 * Error Class 409xxx: Conflict
 * Usage: For errors related to conflicts like existed entities, duplicated values...
 */

export const EXISTED_USER: IError = {
  code: '409000',
  name: 'EXISTED_USER',
};

/**
 * Error Class 500xxx: System Error
 * Usage: For errors originate from the system like missing configuration, integration failed...
 */
export const UNKNOWN_ERROR: IError = {
  code: '500000',
  name: 'UNKNOWN_ERROR',
};

export const CONFIGURATION_MISSING: IError = {
  code: '500001',
  name: 'CONFIGURATION_MISSING',
};

export const IMPLEMENTATION_ERROR: IError = {
  code: '500002',
  name: 'IMPLEMENTATION_ERROR',
};

export const DATABASE_ERROR: IError = {
  code: '500003',
  name: 'DATABASE_ERROR',
};
