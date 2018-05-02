import { Component, OnInit, sequence } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { pipe } from 'rxjs/util/pipe';
import { filter, map, retry } from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  styleUrls: ['./forms-builder.component.css']
})
export class FormsBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}

