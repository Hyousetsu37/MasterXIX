import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private formBuilder = inject(FormBuilder)
  private authService = inject(Auth)
  private router = inject(Router)

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(){
    if(this.loginForm.valid){
      const username = this.loginForm.value.username as string
      const password = this.loginForm.value.password as string
      const isValid = this.authService.login({username, password})

      if(isValid){
        console.log('Login exitoso, redirigiendo al dashboard...')
        this.router.navigate(['/dashboard'])
      } else{
        alert('Credenciales incorrectas intenta con master@lemoncode.net y 123456')
      }


    } else{
      this.loginForm.markAllAsTouched()
    }
  }
}


