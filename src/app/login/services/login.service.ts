import { SocialUser } from 'angularx-social-login';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Injectable()
export class LoginService {

  constructor(private authService: AuthService){}

  public handleLogin(user: SocialUser) {
    this.authService.getAuthorizationToken(user.email, user.firstName, user.lastName)
                            .subscribe((token) => {
                              this.authService.saveAuthorizationToken(token.token);
                              this.authService.setUser(token.token);
                            });
  }
}
