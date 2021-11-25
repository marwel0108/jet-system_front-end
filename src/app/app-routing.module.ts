import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { E404Component } from './pages/components/e404/e404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GruposComponent } from './pages/grupos/grupos/grupos.component';
import { HorariosComponent } from './pages/horarios/horarios/horarios.component';
import { RegistroComponent } from './pages/materias/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PlanesAcademicosComponent } from './pages/planesAcademicos/planes-academicos/planes-academicos.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PublicGuard } from './shared/guards/public.guard';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: '/'},
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent, canActivate: [PublicGuard]},
  {path: 'registro-materias', component: RegistroComponent, canActivate: [AuthGuard]},
  {path: 'planes-academicos', component: PlanesAcademicosComponent},
  {path: 'horarios', component: HorariosComponent, canActivate: [AuthGuard]},
  {path: 'grupos', component: GruposComponent, canActivate: [AuthGuard]},
  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
  {path: '**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
