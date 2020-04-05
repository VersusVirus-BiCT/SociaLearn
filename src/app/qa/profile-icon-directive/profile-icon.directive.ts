import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[profile-icon]'
})
export class ProfileIconDirective implements AfterViewInit {

  constructor(
    private elr: ElementRef
  ) { }

  public ngAfterViewInit(): void {
    this.elr.nativeElement.style.color = this.createRandomHex();
  }

  public createRandomHex(): string {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }

}
