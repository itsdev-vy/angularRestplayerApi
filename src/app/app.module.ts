import { CustomDirective } from "./custom.directive";
import { coursesComponent } from "./COURSES/courses.component";
import { QspidersComponent } from "./jspiders.components";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeComponent } from "./employee/employee.component";

//import routing module
import { RouterModule, Routes, Router } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UsersComponent } from "./users/users.component";
import { SimpleComponent } from "./simple/simple.component";
import { PengaDirective } from "./penga.directive";
import { ContactComponent } from "./contact/contact.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StudentsComponent } from "./students/students.component";
import { FormBuilderComponent } from "./form-builder/form-builder.component";

//TO USE HTTP RESTFUL API IN ANGULAR IMPORT
//import httpClientModule from '@angular/common/http'
import { HttpClientModule } from "@angular/common/http";
import { ApiComponent } from "./api/api.component";

@NgModule({
  declarations: [
    AppComponent,
    QspidersComponent,
    coursesComponent,
    HeaderComponent,
    LoginComponent,
    EmployeeComponent,
    HomeComponent,
    RegisterComponent,
    PagenotfoundComponent,
    UsersComponent,
    SimpleComponent,
    CustomDirective,
    PengaDirective,
    ContactComponent,
    StudentsComponent,
    FormBuilderComponent,
    ApiComponent
  ], //register in app.module.file
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "api", component: ApiComponent },
      { path: "**", component: PagenotfoundComponent } //page not found
    ])
  ], //used for registering modules
  providers: [], //use services
  bootstrap: [AppComponent]
})
export class AppModule {}
