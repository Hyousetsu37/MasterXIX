import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera-privada',
  imports: [MatButtonModule],
  templateUrl: './cabecera-privada.html',
  styleUrl: './cabecera-privada.scss',
})
export class CabeceraPrivada {
  authService = inject(Auth)
  private router = inject(Router)

  onLogout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
