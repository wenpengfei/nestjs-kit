import { ExceptionFilter, Catch } from '@nestjs/common'
import { PrismaClientValidationError } from '@prisma/client/runtime'
import { throwError } from 'rxjs'

@Catch(PrismaClientValidationError)
export class PrismaExceptionsFilter implements ExceptionFilter {
  catch(exception: PrismaClientValidationError) {
    console.error(exception)
    return throwError({ statusCode: 500, error: 'Data Access Error' })
  }
}
