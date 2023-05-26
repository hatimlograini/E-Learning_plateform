
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-user-course-details',
  templateUrl: './user-course-details.component.html',
  styleUrls: ['./user-course-details.component.css']
})
export class UserCourseDetailsComponent implements OnInit{

  ngOnInit(): void {
  }
  PDFSRC!: string;
  getId:any;
  updateForm!: FormGroup;
  Course:any=[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private NgZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudAPI: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudAPI.getcourse(this.getId).subscribe(res => {
      this.Course = res['course'];
      console.log(this.Course);
      // retrieve the link to the PDF from the Course object
      const pdfLink = this.Course.link;
      // get the PDF file using the link
      this.http.get(pdfLink, { responseType: 'blob' }).pipe(
        map((result: any) => {
          return URL.createObjectURL(result);
        })
      ).subscribe((url: string) => {
        this.PDFSRC = url;
      });
    });

  }
}
