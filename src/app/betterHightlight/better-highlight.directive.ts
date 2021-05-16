import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }
  @Input() defaultColor:string = "transparent";
  @Input('appBetterHighlight') highlightColor:string = "yellow";
  @HostBinding('style.backgroundColor') backgroundcolor: string = "red";
  @HostBinding('style.color') color: string
  ngOnInit() {
    this.backgroundcolor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement ,'background-color','blue')
  }
  @HostListener('mouseenter') mouseover(over: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement ,'background-color','blue')
    this.backgroundcolor= this.highlightColor;
    this.color = "white";
  }
  @HostListener('mouseleave') mouseleave(over: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement ,'background-color','red')
    this.backgroundcolor = this.defaultColor;
    this.color= "black";
  }
}