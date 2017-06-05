import { Component, OnInit } from '@angular/core';
import { fabonacciSeries } from 'npmpoc_approach2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value: number;
  myForm: FormGroup;
  result: string;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): any {
    this.myForm = this.fb.group({
      number: [1, Validators.required]
    });
  }

  calculateFabonacci(input: number) {
    this.result = fabonacciSeries(input);
  }
}
