import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-form-builder",
  templateUrl: "./form-builder.component.html",
  styleUrls: ["./form-builder.component.css"]
})
export class FormBuilderComponent implements OnInit {
  constructor(private fb: FormBuilder) {} //services DI

  contactForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required]
  });

  get name() {
    return this.contactForm.get("name");
  }

  ngOnInit() {}
}
