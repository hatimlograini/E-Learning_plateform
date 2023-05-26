
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit{

  getId:any;
  updateForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private NgZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private crudAPI:CrudService){
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.crudAPI.getcourse(this.getId).subscribe(res=>{
        console.log(res['course']);
        this.updateForm.setValue({
          name : res['course']['name'],
          price : res['course']['price'],
          description : res['course']['description'],
          link : res['course']['link'],
          img : res['course']['img']
        });
        console.log('hatim test '+ res);
      });
      this.updateForm = this.formBuilder.group({
        name :[''],
        price :[''],
        description :[''],
        link :[''],
        img :['']
      })

    }


  ngOnInit(): void {

  }

  onUpdate(){
    this.crudAPI.updatecourse(this.getId,this.updateForm.value).subscribe(res=>{
      console.log('');
      const alertMessage = document.createElement('div');
    alertMessage.innerText = "Data Updated success";
    alertMessage.style.padding = "10px";
    alertMessage.style.borderRadius = "5px";
    alertMessage.style.backgroundColor = "#4CAF50";
    alertMessage.style.color = "white";
    alertMessage.style.fontWeight = "bold";
    alertMessage.style.textAlign = "center";
    alertMessage.style.position = "fixed";
    alertMessage.style.top = "50%";
    alertMessage.style.left = "50%";
    alertMessage.style.transform = "translate(-50%, -50%)";
    alertMessage.style.zIndex = "9999";
    document.body.appendChild(alertMessage);
    setTimeout(() => {
      alertMessage.remove();
    }, 3000);
      this.NgZone.run(()=>{
        this.router.navigateByUrl('/adminHome')
      })
    },(err)=>{
      console.log(err);
    })
  }
}
