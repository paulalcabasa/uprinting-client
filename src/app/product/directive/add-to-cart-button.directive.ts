import { Directive, Input, OnInit, OnChanges, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
    selector : '[add-to-cart-button]'
})

export class AddToCartButtonDirective implements OnInit, OnChanges
{

    @Input() product : any;
    
    @HostListener('click') onclick()
    {
        console.log('Add to cart clicked!', this.product);
        this.router.navigate(['cart']);
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