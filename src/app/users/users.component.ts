import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: any = [
    {
      user_id: 1,
      user_photo:
        "https://cdn.pixabay.com/photo/2014/11/21/12/13/man-540500__340.jpg",
      user_name: "THALA",
      user_dob: new Date("1/2/2000"),
      user_company: "FACEBOOK",
      user_designation: "NODEJS DEVELOPER",
      user_salary: 40000,
      user_location: "MUMBAI",
      user_education: "BE",
      user_doj: new Date("10/10/2015")
    },
    {
      user_id: 2,
      user_photo:
        "https://cdn.pixabay.com/photo/2019/01/24/18/14/man-3953040__340.jpg",
      user_name: "MANU",
      user_dob: new Date("7/7/2001"),
      user_company: "Google",
      user_designation: "JAVA DEVELOPER",
      user_salary: 20000,
      user_location: "MYSORE",
      user_education: "BTECH",
      user_doj: new Date("10/12/2015")
    },
    {
      user_id: 3,
      user_photo:
        "https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471__340.jpg",
      user_name: "RAJAT",
      user_dob: new Date("5/7/1995"),
      user_company: "ORACLE",
      user_designation: "REACT DEVELOPER",
      user_salary: 80000,
      user_location: "BANGKOK",
      user_education: "BTECH",
      user_doj: new Date("1/1/2019")
    },
    {
      user_id: 4,
      user_photo:
        "https://cdn.pixabay.com/photo/2016/11/29/13/55/adult-1870016__340.jpg",
      user_name: "RAJKUMAR",
      user_dob: new Date("1/7/1998"),
      user_company: "TESTYANTRA",
      user_designation: "JAVA DEVELOPER",
      user_salary: 10000,
      user_location: "CHENNAI",
      user_education: "BTECH",
      user_doj: new Date("10/2/2015")
    }
  ];

  constructor() {}

  ngOnInit() {}
}
