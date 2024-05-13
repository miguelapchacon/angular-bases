import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroeBorrado?: string;
  public listaHeroes: string[] = [
    'Star Lord',
    'Rocket',
    'Drax',
    'Gamora',
    'Nebula',
    'Mantis',
    'Gru',
  ];

  deleteGuadian(): void {
    // el metodo POP() lo que hace es borrar el ultimo elemento de una lista
    // y devolver su valor como string | undifinded
    this.heroeBorrado = this.listaHeroes.pop();
  }
}
