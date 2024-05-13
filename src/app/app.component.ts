import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bases';
  public title2: string = 'Mi primera App de Angular';
  public counter: number = 10;

  incrementar(): void {
    this.counter += 1;
  }
  disminuir(): void {
    this.counter -= 1;
  }
  incrementar_Disminuir(value: number): void {
    this.counter += value;
  }
  resetCounter(): void {
    this.counter = 10;
  }
}
