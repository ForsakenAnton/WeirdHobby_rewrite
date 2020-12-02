import { from } from 'rxjs';
import {Directive, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core'

@Directive({
    selector: '[hoverSelector]'
})

export class ImageDirective 
{
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        //this.elementRef.nativeElement.style.height = 350 + 'px';
        // this.renderer.setStyle(this.elementRef.nativeElement, "height", 350 + 'px');
    }

    @HostListener("mouseenter") omMouseEnter() {
        this.setHeight(210, ['0', '0', '20', 'black']);
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.setHeight(200, ['0', '0', '0', 'white']);
    }

    private setHeight(value: number, param: Array<any>) {
          this.renderer.setStyle(this.elementRef.nativeElement, "height", value + 'px');
        // this.renderer.setStyle(this.elementRef.nativeElement, "box-shadow", [param[0] + 'px', param[1] + 'px', param[2] + 'px', param[3]]);
        this.renderer.setStyle(this.elementRef.nativeElement, "box-shadow", param[0] + 'px ' + param[1] + 'px ' + param[2] + 'px ' + param[3]);
    }
}