import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-publico',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-publico.html',
  styleUrl: './menu-publico.scss',
})
export class MenuPublico {}
