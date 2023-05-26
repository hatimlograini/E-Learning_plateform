import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './services/auth.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserViewCourseComponent } from './user-view-course/user-view-course.component';
import { UserCourseDetailsComponent } from './user-course-details/user-course-details.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent ,  canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent , canActivate:[AuthGuard]},
  {path:'view_courses',component:UserViewCourseComponent , canActivate:[AuthGuard]},
  {path:'course-details/:id',component:UserCourseDetailsComponent , canActivate:[AuthGuard]},
  //admin:
  {path:'add-course',component:AddCourseComponent , canActivate:[AuthGuard]},
  {path:'adminHome',component:AdminHomeComponent, canActivate:[AuthGuard]},
  { path:'edit-course/:id',component:UpdateCourseComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
