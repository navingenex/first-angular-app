import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [`
  // h1{
  //   color:red;
  // }
  // `],
})
export class AppComponent implements OnInit {
  isLoggedIn$: boolean;
  // @Output() open = new EventEmitter<any>();
  // @Output() close = new EventEmitter<any>();
  // visible = true;
  // title = 'app';
  isTrue = true;
  serverElements = [{ type: 'server', name: 'TestServer', content: 'This is a test Server' }];
  isCollapsed = true;
  showDropdown() {
    this.isTrue = !this.isTrue;
  }
  collapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.collapsed();
    this.showDropdown();
    this.isLoggedIn$ = this.authService.loggedIn;

  }
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  // component interaction @Output
  // toggle() {
  //   this.visible = !this.visible;
  //   if (this.visible) {
  //     this.open.emit(null);
  //   } else {
  //     this.close.emit(null);
  //   }

  // }
  // user: Object = {};

  // user = {
  //   firstName: 'john',
  //   password: 'test'
  // };

  // Template driven form
  // onSubmitTemplateBased() {
  //   console.log(this.vm);
  // }



}
