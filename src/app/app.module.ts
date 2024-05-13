import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';
import { timestamp } from 'rxjs';
import { CounterModule } from './counter/components/counter/counter.module';
import { heroesModule } from './heroes/heroes.module';

// Un modulo no es mas que una simple clase que tiene un decorador
// que en si mismo es un agrupador que encapsula una funcionabilidad
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CounterModule, heroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
