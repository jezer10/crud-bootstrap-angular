import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonaComponent } from './persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './persona/edit-persona/edit-persona.component';
import { ListPersonaComponent } from './persona/list-persona/list-persona.component';

const routes: Routes = [
  {path:'listpersona',component:ListPersonaComponent},
  {path:'addpersona',component:AddPersonaComponent},
  {path:'editpersona/:id',component:EditPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
