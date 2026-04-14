import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraPublica } from './layout/cabecera-publica/cabecera-publica';
import { CabeceraPrivada } from './layout/cabecera-privada/cabecera-privada';
import { MenuPublico } from './layout/menu-publico/menu-publico';
import { MenuPrivado } from './layout/menu-privado/menu-privado';
import { Pie } from './layout/pie/pie';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CabeceraPublica, CabeceraPrivada, MenuPublico, MenuPrivado,Pie],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  authService = inject(Auth)
}
