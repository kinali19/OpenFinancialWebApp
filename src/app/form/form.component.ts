import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en'
registerLocaleData(localeEn, 'en');



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  monthlyValue: number = 150000
  monthlyExpenseValue: number = 50000
  minValue: number = 100000
  maxValue: number = 300000
  existingLoan: number = 15000 
  selected = "1"
  checked=true

  repaymentList = [{
    id: "1",
    title: "6 Months",
  },
  {
    id: "2",
    title: "12 Months",
  }]

  constructor() { }

  ngOnInit(): void {
  }
  changeValue(event) {
    this.monthlyValue = event.value;
  }

}
