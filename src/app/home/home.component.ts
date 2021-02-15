import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  number_show: any;
  number: any;

  constructor() { }

  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("input_number")).valueAsNumber = 1;
  }

  checkNumber(event) {
    this.number = event.target.value;
  }

  click_btn() {
    const number_to_string = this.number.toString()

    if (this.number > 0) {

      this.number_show = parseFloat(number_to_string).toFixed(0);
      return (<HTMLInputElement>document.getElementById("input_number")).valueAsNumber = this.number_show;

    } else if (this.number < 0) {
      return (<HTMLInputElement>document.getElementById("input_number")).valueAsNumber = 1;

    } else {
      (<HTMLInputElement>document.getElementById("input_number")).valueAsNumber = 0;
    }
  }

}
