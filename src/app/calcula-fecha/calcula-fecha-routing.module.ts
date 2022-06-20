import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculaFechaComponent } from './pages/calcula-fecha/calcula-fecha.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: CalculaFechaComponent
    },
    {
      path: '**', redirectTo: ''
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculaFechaRoutingModule { }
