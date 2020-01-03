import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  // username(e) {
  //   console.log("username is " + e.target.value);
  // }

  getUsername(username) {
    console.log(username);
  }
  // click() {
  //   alert("hello Angular here");
  // }

  // ImageUrl =
  //   "https://cdn.pixabay.com/photo/2018/10/16/17/24/dog-3751980__340.jpg";

  // isActive = false;
  // colspan = 2;

  // employee = [
  //   {
  //     emp_id: 1,
  //     emp_photo:
  //       "https://cdn.pixabay.com/photo/2014/11/21/12/13/man-540500__340.jpg",
  //     emp_name: "THALA",
  //     emp_designation: "NODEJS DEVELOPER",
  //     emp_salary: 40000,
  //     emp_location: "MUMBAI",
  //     emp_education: "BE",
  //     emp_doj: new Date("10/10/2015")
  //   },
  //   {
  //     emp_id: 2,
  //     emp_photo:
  //       "https://cdn.pixabay.com/photo/2019/01/24/18/14/man-3953040__340.jpg",
  //     emp_name: "MANU",
  //     emp_designation: "JAVA DEVELOPER",
  //     emp_salary: 20000,
  //     emp_location: "MYSORE",
  //     emp_education: "BTECH",
  //     emp_doj: new Date("10/12/2015")
  //   }
  // ];
  constructor() {}

  ngOnInit() {
    //   //javascript way
    //   var input = document.querySelector("input");
    //   input.addEventListener("keyup", e => {
    //     console.log(e.target.value);
    //   });
  }
}
