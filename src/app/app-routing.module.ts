import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovenyekListComponent } from './novenyek-list/novenyek-list.component';
import { RendelesekComponent } from './rendelesek/rendelesek.component';
import { NovenyComponent } from './part/noveny/noveny.component';

const routes: Routes = [
  {path: "novenyek",component: NovenyekListComponent},
  {path:"rendelesek", component: RendelesekComponent},
  {path: "novenyekadmin", component: NovenyComponent},
  {path: "**", component: NovenyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
