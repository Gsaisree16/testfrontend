import { Component, OnInit } from '@angular/core';
import { StudenttestService } from '../studenttest.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  

  form: FormGroup;
  
  constructor(public studenttestService: StudenttestService,
    private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
  
      studentname: new FormControl('',[ Validators.required,Validators.pattern("^[a-zA-Z]+[a-zA-Z ]+$")]),
      email: new FormControl('',[ Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
      phonenumber: new FormControl('',[ Validators.required,Validators.pattern("[0-9]{10}")]),
      age:new FormControl('',[Validators.required,Validators.pattern("[0-9]")]),
      gender: new FormControl('male', Validators.required),
      joineddate: new FormControl('', Validators.required),
    });
  }
  
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.studenttestService.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('student/index');
         alert("Record created successfully!")
    })
}
}
