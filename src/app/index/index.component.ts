import { Component, OnInit } from '@angular/core';
import { StudentTestService } from '../Studenttest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
students: Student[] = [];


  constructor(public StudenttestService:StudenttestService ,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    
   this.StudenttestService.getAll().subscribe((data: Student[])=>{
      this.students = data;
      console.log(this.students);
  })
};

}
