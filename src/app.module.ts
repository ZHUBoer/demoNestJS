import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// TS中的装饰器是一个语法糖，本质是一个函数
@Module({
  imports: [], // 导入模块的列表，如果需要使用其他模块的服务，需要通过这里导入；
  controllers: [AppController], // 处理http请求，包括路由控制，想客户端返回响应，具体业务委托到providers处理；
  providers: [AppService], // 注入器实例化的提供者，处理具体的业务逻辑。各个模块之间可以共享；
})
export class AppModule {} // 导出服务的列表，供其他模块导入使用
