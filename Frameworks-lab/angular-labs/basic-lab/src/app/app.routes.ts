import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { AcercaDe } from './pages/acerca-de/acerca-de';
import { Dashboard } from './pages/dashboard/dashboard';
import { Galeria } from './pages/galeria/galeria';
import { Crud } from './pages/crud/crud';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'login', component:Login},
    {path:'acerca-de', component:AcercaDe},
    {path:'dashboard', component:Dashboard},
    {path:'galeria', component:Galeria},
    {path:'crud', component:Crud},
    {path:'profile', component:Profile},
    {path:'**', redirectTo:'', pathMatch:'full'},
];
