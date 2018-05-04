import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate } from './../guard/can-deactivate-guard';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit, CanComponentDeactivate {
  user: { firstname: string, comment: string };
  firstname: string;
  comment: string;
  changesSaved = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = {
      firstname: 'Navin Kumar',
      comment: 'Some comment'
    };
    this.firstname = this.user.firstname;
    this.comment = this.user.comment;
  }
  // log(x) {
  //   console.log(x);
  // }

  onSubmit() {
    this.changesSaved = true;
    this.firstname = this.user.firstname;
    this.comment = this.user.comment;
    this.router.navigate(['/customdirective']);
  }

  // changeing routes state without saving changes it will prompt confirm dialogbox
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.firstname !== this.user.firstname || this.comment !== this.user.comment) && !this.changesSaved) {
      return confirm('Do you want to discard changes ?');
    } else if ((this.firstname === this.user.firstname && this.comment === this.user.comment) && this.changesSaved) {
      return true;
    } else {
      return true;
    }
  }

}
