import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  number_show: any;
  number: number = 1;
  calculate_drop_down: any = ['isPrime', 'isFibonacci'];
  input_value: any;
  isPrime: boolean;

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

      if (this.number_show == 2) {
        this.isPrime = true;

      } else {

        if (this.number_show >= 2) {
          for (var i = 2; i < this.number_show; i++) {
            if (this.number_show % i === 0) {
              this.isPrime = false;
              return false;

            } else {
              this.isPrime = true;
            }
            return this.number_show > 1;
          }
        } else {
          this.isPrime = false;
        }
      }
      return (<HTMLInputElement>document.getElementById("input_number")).valueAsNumber = this.number_show;

    } else if (this.number < 0) {
      this.isPrime = false;
      return (<HTMLInputElement>document.getElementById("input_number")).valueAsNumber = 1;

    } else {
      this.isPrime = false;
      return (<HTMLInputElement>document.getElementById("input_number")).valueAsNumber = 0;
    }

  }
}
