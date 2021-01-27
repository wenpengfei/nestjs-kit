import { RpcException } from '@nestjs/microservices'

export class BaseException extends RpcException {
  constructor(message: any, statusCode?: number) {
    super({
      message,
      statusCode,
    })
  }
}
