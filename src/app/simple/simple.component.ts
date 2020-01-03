import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent implements OnInit {
  users = [
    {
      name: "manu",
      age: 20,
      gender: "male",
      country: "india"
    },
    {
      name: "anu",
      age: 25,
      gender: "female",
      country: "india"
    },
    {
      name: "Rajkumar",
      age: 26,
      gender: "Transgender",
      country: "westindies"
    },
    {
      name: "Rajat",
      age: 24,
      gender: "male",
      country: "Thailand"
    }
  ];
  // toggleClass = false;

  // toggleState() {
  //   this.toggleClass = !this.toggleClass; ///instead of this we can use true also
  // }

  // addDynamicClass() {
  //   return {
  //     "bg-success": true,
  //     "text-white": true,
  //     "mt-2": true,
  //     "p-4": true,
  //     background: this.toggleClass
  //   };
  // }

  // isBtn = true;
  // users = ["manu", "vinu", "arun", "Thala"];
  //color: "green";

  constructor() {}

  ngOnInit() {}
}
