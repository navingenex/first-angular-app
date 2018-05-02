import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  // h1{
  //   color:red;
  // }
  // `],
})
export class AppComponent implements OnInit {
  // @Output() open = new EventEmitter<any>();
  // @Output() close = new EventEmitter<any>();
  // visible = true;
  // title = 'app';
  serverElements = [{ type: 'server', name: 'TestServer', content: 'This is a test Server' }];

  constructor() { }

  ngOnInit() {
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
