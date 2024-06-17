import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { QueryFailedError, TypeORMError } from 'typeorm';

@Catch(TypeORMError)
export class TypeormFilter implements ExceptionFilter {
  catch(exception: TypeORMError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status = 400;
    if(exception instanceof QueryFailedError)
    {
      status=exception.driverError.code;
    }
    response.status(500).json({
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    });
    return response;
  }
}
