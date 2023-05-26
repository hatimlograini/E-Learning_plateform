import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loggedIn:boolean = false;

  constructor(private auth:AuthenticationService,
              private router:Router
    ){}

  ngOnInit(): void {
    this.auth.status().subscribe((res)=>{
      this.loggedIn = res;

      //console.log('navbar:' + this.loggedIn);
    },(err)=>{
      console.log(err);
    });


  }
}
