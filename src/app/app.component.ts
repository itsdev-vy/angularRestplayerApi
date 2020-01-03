import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "jspiders";

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyChjH9wG3n3U_2Nbgsnnefx289AzhKYvAw",
      authDomain: "fullstack-angular-e7e60.firebaseapp.com",
      databaseURL: "https://fullstack-angular-e7e60.firebaseio.com",
      projectId: "fullstack-angular-e7e60",
      storageBucket: "fullstack-angular-e7e60.appspot.com",
      messagingSenderId: "430598652426",
      appId: "1:430598652426:web:be967389b474334b6a15f3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
