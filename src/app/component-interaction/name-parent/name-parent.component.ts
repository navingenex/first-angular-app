import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  templateUrl: './name-parent.component.html',
  styleUrls: ['./name-parent.component.css']
})
export class NameParentComponent implements OnInit {
  names = ['Navin Kumar', '', 'Satsen singh'];
  major = 1;
  minor = 23;
  constructor() { }

  ngOnInit() {
  }
  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }


}
