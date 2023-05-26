import { CrudService } from '../services/crud.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {


  courseForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) {
    this.courseForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      link: [''],
      img: ['']
    })
  }

  ngOnInit(): void {


  }

  onSubmit(): any {
    this.crudService.addcourse(this.courseForm.value)
      .subscribe(() => {
        console.log('Data added successfully')
        this.ngZone.run(()=>this.router.navigateByUrl('adminHome'))
      },(err)=>{
        console.log(err);
      });
    }

}
