import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Nest.js中没有单独配置路由的地方，而是使用装饰器。Nest.js中定义了若干的装饰器用于处理路由。
 * 如每一个要成为控制器的类，都需要借助@Controller装饰器的装饰，该装饰器可以传入一个路径参数，作为访问这个控制器的主路径。
 */

@Controller('app') // 该装饰器可以传入一个路径参数，作为访问这个控制器的主路径。（访问'http://localhost:9080/app'即可访问）
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 使用@Controller装饰器来定义控制器, @Get是请求方法的装饰器，对getHello方法进行修饰，表示这个方法会被GET请求调用。
  @Get('list')
  getHello(): string {
    return this.appService.getHello();
  }
  // 一种可以匹配到post请求的装饰器
  @Post('list')
  create(): string {
    return this.appService.getHello();
  }
  // 通配符路径
  @Get('user_*')
  getUser(): string {
    return 'getUser';
  }
  // 匹配到Put请求
  @Put('list/:id')
  PutUser(): string {
    return 'update';
  }
}
