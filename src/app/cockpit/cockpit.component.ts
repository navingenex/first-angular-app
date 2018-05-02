import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  //  newServerContent = '';
  // Getting input data via view child element reference
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
