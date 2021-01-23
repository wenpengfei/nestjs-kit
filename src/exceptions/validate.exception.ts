import { BaseException } from './base.exception'

export class ValidateException extends BaseException {
  constructor(message: any, statusCode?: number) {
    super(message, statusCode)
  }
}
