import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'auth-component',
  template: '<router-outlet></router-outlet>'
})
export class AuthComponent implements OnInit{

  constructor(public authService: AuthService, public af: AngularFire, public router: Router){}

  ngOnInit(){
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigate(['/backend']);
      }
    });
  }
}
