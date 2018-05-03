import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custome-directive',
  templateUrl: './custome-directive.component.html',
  styleUrls: ['./custome-directive.component.css']
})
export class CustomeDirectiveComponent implements OnInit {
  evenNumbers = [2, 4, 6];
  oddNumbers = [1, 3, 5];
  onlyOdd = true;
  switchValue = 10;
  constructor() { }

  ngOnInit() {
  }
  onChange() {
    if (this.onlyOdd) {
      this.onlyOdd = false;
    } else {
      this.onlyOdd = true;
    }

  }

}
