import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';

const routes: Routes =  [
  { path: 'student', redirectTo: 'studenttest/index', pathMatch: 'full'},
  { path: 'studenttest/index', component: IndexComponent },
  { path: 'studenttest/create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudenttestRoutingModule { }
