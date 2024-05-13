import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public edad: number = 45;

  // esto es una propiedad por lo tanto solo se invoca con el nombre
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // esto es un metodo por lo tanto necesita parentesis para invocarse
  getheroDescription(): string {
    return `${this.name} - ${this.edad}`;
  }

  public changeHero(): void {
    // va cambiar el nombre del heroe
    this.name = 'Star Lord';
  }

  public changeAge(): void {
    // va devolver la edad
    this.edad = 30;
  }

  public reset2() {
    this.name = 'ironman';
    this.edad = 45;

    /* document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML='<h1>Desde Angular</h1>'
    }
    )*/
  }
}

const cambiarNombres = (): string => {
  return '';
};

function funcionGenerica<T>(arg_generico: T): T {
  return arg_generico;
}
