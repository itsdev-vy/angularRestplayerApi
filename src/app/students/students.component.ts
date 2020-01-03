import { FormControl } from "@angular/forms";
import { FormGroup, FormArray } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  constructor() {}

  form = new FormGroup({
    StudentList: new FormArray([])
  });
  //use getter
  get GetStudents() {
    return this.form.get("StudentList");
  }

  addStudents(student) {
    // console.log(student.value); //kind of setter method
    (this.GetStudents as FormArray).push(new FormControl(student.value));
  }

  removeStudent(student: FormControl) {
    //console.log(student);
    let index = (this.GetStudents as FormArray).controls.indexOf(student);
    (this.GetStudents as FormArray).removeAt(index);
  }

  ngOnInit() {}
}
