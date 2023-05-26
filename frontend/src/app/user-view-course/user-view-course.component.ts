import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-user-view-course',
  templateUrl: './user-view-course.component.html',
  styleUrls: ['./user-view-course.component.css']
})
export class UserViewCourseComponent implements OnInit{
  Courses:any=[];
  constructor(private crudAPI:CrudService){}

  ngOnInit(): void {
    this.crudAPI.getcourses().subscribe(res=>{
      console.log(res);
      this.Courses = res;
    })


  }





}

