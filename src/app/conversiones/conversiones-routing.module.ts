import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionesComponent } from './pages/conversiones/conversiones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ConversionesComponent
      },
      {
        path: '**', redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversionesRoutingModule { }
