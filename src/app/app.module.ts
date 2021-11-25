import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './pages/components/menu/menu.component';
import { GotodashboardComponent } from './pages/components/gotodashboard/gotodashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './pages/materias/registro/registro.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { PlanesAcademicosComponent } from './pages/planesAcademicos/planes-academicos/planes-academicos.component';
import { HorariosComponent } from './pages/horarios/horarios/horarios.component';
import { GruposComponent } from './pages/grupos/grupos/grupos.component';
import { E404Component } from './pages/components/e404/e404.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    GotodashboardComponent,
    LoginComponent,
    RegistroComponent,
    FooterComponent,
    PlanesAcademicosComponent,
    HorariosComponent,
    GruposComponent,
    E404Component,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
