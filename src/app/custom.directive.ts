import { element } from "protractor";
import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";
@Directive({
  selector: "[red]" //directive name
})
export class CustomDirective {
  //Dependency injector
  constructor(el: ElementRef) {
    //el is refrence we can give anything
    el.nativeElement.style.background = "red";
    el.nativeElement.style.color = "white";
    el.nativeElement.style.padding = "10px";
    el.nativeElement.style.borderRadius = "10px";
    el.nativeElement.style.border = "1px solid #111";
  }

  @HostBinding("style.background") background: string = "red";
  // @HostBinding("style.background") transform: string;
  // @HostBinding("style.background") transition: string;

  @HostListener("mouseenter") mouseenter() {
    console.log("mouse entered 😃");
    this.background = "blue";
    // this.transform = "rotate(180deg)";
    // this.transition = "all 5s";
  }
  @HostListener("mouseleave") mouseleave() {
    console.log("mouse leave😢");
    this.background = "green";
    // this.transform = "rotate(180deg)";
    // this.transition = "all 5s";
  }
}
