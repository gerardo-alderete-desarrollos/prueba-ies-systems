import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule ),
    data: {
      titulo: 'Login',
      mostrarMenuTitulo: false
    }
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioModule ),
    canLoad: [AuthGuard],
    data: {
      titulo: 'Bienvenido',
      mostrarMenuTitulo: false
    }
  },
  {
    path: 'conversiones',
    loadChildren: () => import('./conversiones/conversiones.module').then( m => m.ConversionesModule ),
    canLoad: [AuthGuard],
    data: {
      titulo: 'Conversiones',
      mostrarMenuTitulo: true
    }
  },
  {
    path: 'calculaFecha',
    loadChildren: () => import('./calcula-fecha/calcula-fecha.module').then( m => m.CalculaFechaModule ),
    canLoad: [AuthGuard],
    data: {
      titulo: 'Calcula Fecha',
      mostrarMenuTitulo: true
    }
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioModule ),
    canLoad: [AuthGuard],
    data: {
      titulo: 'Formulario',
      mostrarMenuTitulo: true
    }
  },
  {
    path: '**', redirectTo: 'login'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
