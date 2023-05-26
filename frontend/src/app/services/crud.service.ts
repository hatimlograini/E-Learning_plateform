import { Injectable } from '@angular/core';
import { Course } from './Course';
import { catchError,map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API:string = 'http://127.0.0.1:8000/api/courses';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpClient : HttpClient) { }

  addcourse(data:Course):Observable<any>{
    let API_URL = this.REST_API;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }

  getcourses(){
    return this.httpClient.get(this.REST_API);
  }

  getcourse(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
      catchError(this.handleError))
  }

  updatecourse(id:any,data:Course):Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data , {headers:this.httpHeaders})
    .pipe(catchError(this.handleError))
  }

  deletecourse(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL, {headers:this.httpHeaders})
    .pipe(catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error code: ${error.status}\n Message:${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
