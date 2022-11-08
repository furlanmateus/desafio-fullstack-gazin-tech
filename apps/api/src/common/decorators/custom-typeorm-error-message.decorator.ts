import { SetMetadata, Type } from '@nestjs/common';

export const CUSTOM_TYPEORM_ERROR_MESSAGE_KEY = 'custom-typeOrm-error-message';

export interface CustomTypeOrmErrorMessageArgs {
  errorCode: string;
  message: string;
  newThrow: Type<Error>;
}

export const CustomTypeOrmErrorMessage = (
  ...args: CustomTypeOrmErrorMessageArgs[]
) => SetMetadata(CUSTOM_TYPEORM_ERROR_MESSAGE_KEY, args);
