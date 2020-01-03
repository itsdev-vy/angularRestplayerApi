import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[green]"
})
export class PengaDirective {
  constructor(x: ElementRef) {
    x.nativeElement.style.background = "green";
    x.nativeElement.style.padding = "10px";
    x.nativeElement.style.borderRadius = "10px";
    x.nativeElement.style.border = "1px solid #111";
  }
}
