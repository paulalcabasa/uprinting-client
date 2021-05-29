import { Directive, Input, OnInit, OnChanges, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
    selector : '[product-details-button]'
})

export class ProductDetailsButtonDirective implements OnInit, OnChanges
{

    @Input() product_id : number;
    
    @HostListener('click') onclick()
    {
     //   console.log('clicked!', this.product_id);
        this.router.navigate(['product/details/', this.product_id]);
    }

    constructor(private router: Router)
    {

    }

    ngOnInit()
    {
       // console.log('ngOnInit', this.product_id);
    }

    ngOnChanges()
    {
      //  console.log('ngOnChanges', this.product_id);

    }
    
    ngAfterContentInit()
    {
        //console.log('ngAfterContentInit')

    }

    ngAfterViewInit()
    {
      //  console.log('ngAfterViewInit')
    }

    ngOnDestroy()
    {
       // console.log('ngOnDestroy')
//
    }
}