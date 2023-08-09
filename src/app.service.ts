import { Injectable } from '@nestjs/common';

/**
 * 可以看出使用@Injectable修饰后的AppService,在AppMoudel中注册后，在app.controler中就可以使用，
 * 不需要使用 new AppService()去实例化，直接引用即可。
 * */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
