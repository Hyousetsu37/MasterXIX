import { computed, Injectable, signal } from '@angular/core';

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
  }

  login(credentials:{username:string, password:string}):boolean{
    if(credentials.username ==='master@lemoncode.net' && credentials.password ==='12345678'){
      this.loggedIn = true
      this.username = credentials.username
      localStorage.setItem('currentUser',credentials.username)
      return true
    }
    return false
  }

  logout():void{
    this.loggedIn = false
    this.username = ''
    localStorage.removeItem('currentUser')
  }

  isLogged():boolean{
    return this.loggedIn
  }
  getUsername():string{
    return this.username
  }
}
