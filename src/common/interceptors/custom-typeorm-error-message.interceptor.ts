import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  CustomTypeOrmErrorMessageArgs,
  CUSTOM_TYPEORM_ERROR_MESSAGE_KEY,
} from '../decorators/custom-typeorm-error-message.decorator';

@Injectable()
export class CustomTypeOrmErrorMessageInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const customTypeOrmMessages = this.reflector.getAllAndMerge<
      CustomTypeOrmErrorMessageArgs[]
    >(CUSTOM_TYPEORM_ERROR_MESSAGE_KEY, [context.getHandler()]);

    return customTypeOrmMessages.length
      ? next.handle().pipe(
          catchError((err) => {
            const newError = customTypeOrmMessages.find(
              (cpm) => cpm.errorCode === err.code,
            );

            return newError
              ? throwError(new newError.newThrow(newError.message))
              : throwError(err);
          }),
        )
      : next.handle();
  }
}
