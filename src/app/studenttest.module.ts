import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { StudenttestRoutingModule } from './studenttest-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudenttestRoutingModule,
    FormsModule
    
  ]
})
export class StudenttestModule { }
