import { Component } from "@angular/core";

@Component({
  selector: "courses", //component name
  //render template
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class coursesComponent {
  users = [
    {
      name: "Manu",
      photo:
        "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377__340.jpg",
      age: 20,
      company: "Testyantra",
      salary: 20000,
      designation: "Node developer",
      location: "Mandya",
      gender: "Male",
      education: "BE"
    },
    {
      name: "Rajkumar",
      photo:
        "https://cdn.pixabay.com/photo/2016/04/21/01/31/handsome-1342457__340.jpg",
      age: 25,
      company: "Google",
      salary: 10000,
      designation: "Full Stack Developer",
      location: "Mumbai",
      gender: "Male",
      education: "BE"
    },
    {
      name: "Rajat",
      photo:
        "https://cdn.pixabay.com/photo/2017/12/12/05/01/portrait-3013924__340.jpg",
      age: 24,
      company: "Microsoft",
      salary: 100000,
      designation: " Java Developer",
      location: "Bangkok",
      gender: "Male",
      education: "BE"
    },
    {
      name: "Vinay",
      photo:
        "https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471__340.jpg",
      age: 25,
      company: "Amazon",
      salary: 500000,
      designation: "Full Stack Developer",
      location: "VEGAS",
      gender: "Male",
      education: "BE"
    }
  ];

  addNewuser() {
    this.users.unshift({
      name: "Vinay",
      photo:
        "https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471__340.jpg",
      age: 25,
      company: "Amazon",
      salary: 500000,
      designation: "Full Stack Developer",
      location: "VEGAS",
      gender: "Male",
      education: "BE"
    });
  }

  removeUser(user) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
  // languages = ["Expressjs","java","python","nodejs","ruby","angular","react"];
}
