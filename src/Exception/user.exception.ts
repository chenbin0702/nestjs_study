import { HttpException } from "@nestjs/common";

export class UserException extends HttpException {
 constructor() {
  super("服务器内部错误", 500);
 }
}