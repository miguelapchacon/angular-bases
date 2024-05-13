import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:
    '<button  class="btn btn-success" (click)="incrementar_Disminuir(+1)">+1</button><input type="text" style="width: 10%;text-align: center;border: none;color:red; " value="{{counter}}" readonly="true" /><button  class="btn btn-danger" (click)="incrementar_Disminuir(-1)">-1</button><br /><button style="width:17%;" class="btn btn-secondary pt-2 mt-4" (click)="resetCounter()">RESET</button>',
})
export class CounterComponent {
  public counter: number;
  constructor() {
    this.counter = 20;
  }

  incrementar_Disminuir(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 20;
  }
}
