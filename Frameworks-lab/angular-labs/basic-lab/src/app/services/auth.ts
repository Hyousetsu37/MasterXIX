import { computed, effect, Injectable, signal } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private _isLogged = signal<boolean>(false)
  private _username =  signal<string>('')

  isLogged = computed(()=>this._isLogged())
  username = computed(()=>this._username())

  constructor(){
    const savedUser = localStorage.getItem('currentUser')
    if(savedUser){
      this._isLogged.set(true)
      this._username.set(savedUser)
    }

    effect(()=>{
      const user = this._username();
      if(user){
        localStorage.setItem('currentUser', user)
      } else{
        localStorage.removeItem('currentUser')
      }
    })
  }

  login(credentials:{username:string, password:string}):Observable<boolean>{

    const isValid = credentials.username ==='master@lemoncode.net' && credentials.password ==='12345678'
    return of(isValid).pipe(
      delay(2000),
      tap(valid=>{
        if(valid){
          this._isLogged.set(true)
          this._username.set(credentials.username)
        }
      })
    )
  }

  logout():void{
    this._isLogged.set(false)
    this._username.set('')
  }
}
