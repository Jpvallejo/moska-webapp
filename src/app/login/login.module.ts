import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import {
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialLoginModule,
} from 'angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthModule } from '../core/auth/auth.module';
import { LoginService } from './services/login.service';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.OAUTH.GOOGLE_APP_ID),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(environment.OAUTH.FACEBOOK_APP_ID),
  },
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [LoginComponent],
  entryComponents: [],
  imports: [SharedModule, AuthModule, ReactiveFormsModule, SocialLoginModule],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
    LoginService,
  ],
  bootstrap: [LoginComponent],
})
export class LoginModule {}
