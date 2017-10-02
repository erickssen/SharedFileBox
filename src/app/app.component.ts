import { Component }                            from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
    selector: 'app-root',
    template: '<navbar></navbar><router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
