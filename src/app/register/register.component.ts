import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //to use services or DI(dependency injector) constructoe
  constructor(private http:HttpClient) {
    this.http.get("https://api.github.com/users").subscribe(user => {
      console.log(user);
    });        //angular httpClient

   }

  ngOnInit() {
    // window
    // .fetch('http:api.github')
    // .then().catch(); //javascript fetch method
  }

}
