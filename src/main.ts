import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 创建实例，启动监听端口号3000。
  const app = await NestFactory.create(AppModule);
  // 修改端口号需要重新启动服务
  await app.listen(9080);
}
bootstrap();
