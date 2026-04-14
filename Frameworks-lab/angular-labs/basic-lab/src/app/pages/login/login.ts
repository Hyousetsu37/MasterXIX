import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,MatCardModule,MatInputModule,MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private formBuilder = inject(FormBuilder)
  private authService = inject(Auth)
  private router = inject(Router)

  isLoading = signal(false)

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(){
    if(this.loginForm.valid){
      this.isLoading.set(true)
      const {password,username} = this.loginForm.getRawValue()

      this.authService.login({
        username:username!, password:password!
      }).subscribe({
        next:(success)=>{
          this.isLoading.set(false);
          if(success){
            this.router.navigate(['/dashboard'])
          } else{
            alert('Credentiales incorrectas')
          }
        }, error:()=>{
          this.isLoading.set(false)
          alert('Error en la conexion')
        }
      });
    }else{
      this.loginForm.markAllAsTouched()
    }
  }
}


