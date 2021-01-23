import { BaseException } from './base.exception'

export class BusinessException extends BaseException {
  constructor(message: any, statusCode?: number) {
    super(message, statusCode)
  }
}
