import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';

import { User } from './../user';


@Component({
  selector: 'app-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.css'],
})
export class ReactiveFormsDemoComponent implements OnInit {
  userList: User[] = [];
  constructor(private authService: AuthService, private flashService: FlashMessagesService) { }
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      contact: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  addUser(form) {
    this.userList.push(this.form.value);
    console.log(form);
  }

  onLogin() {
    this.authService.login();
    this.flashService.show('Loggedin successfull...', { cssClass: 'alert-success', timeout: 1000 });
  }
  onLogout() {
    this.authService.logout();
    this.flashService.show('loggedout successfull...', { cssClass: 'alert-danger', timeout: 1000 });
    
  }
}
