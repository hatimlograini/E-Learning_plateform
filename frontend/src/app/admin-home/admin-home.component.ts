import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  Courses:any=[];
  constructor(private crudAPI:CrudService){}
  page = 1;
  pageSize = 4;
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.crudAPI.getcourses().subscribe(res=>{
      console.log(res);
      this.Courses = res;
    })
  }

  delete(id:any,i:any){
    console.log(id);
    if(window.confirm('Are u sure want to delete this item')){
      this.crudAPI.deletecourse(id).subscribe(res =>{
        this.getAll();
      })
    }
  }
}
