import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  // h1{
  //   color:red;
  // }
  // `]
})
export class AppComponent {
  title = 'app';
  // user: Object = {};

  user = {
    firstName: 'john',
    password: 'test'
  };

  // Template driven form
  // onSubmitTemplateBased() {
  //   console.log(this.vm);
  // }
}
