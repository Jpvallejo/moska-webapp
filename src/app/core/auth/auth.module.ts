import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthCookieManager, COOKIE_PATH } from './auth-cookie-manager';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
  ],
  entryComponents: [
  ],
  imports: [
    SharedModule
  ],
  providers: [
    AuthService,
    AuthCookieManager,
    CookieService,
    AuthInterceptorService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true
    },
    {
      provide: COOKIE_PATH,
      useValue: environment.BASE.HTML_URL
    },
  ]
})
export class AuthModule {
}
