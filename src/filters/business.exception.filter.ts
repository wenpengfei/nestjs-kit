import { BusinessException } from '../exceptions/business.exception'
import { ArgumentsHost, Catch, RpcExceptionFilter } from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { RpcException } from '@nestjs/microservices'

@Catch(BusinessException)
export class BusinessExceptionsFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException): Observable<any> {
    return throwError(exception.getError())
  }
}
