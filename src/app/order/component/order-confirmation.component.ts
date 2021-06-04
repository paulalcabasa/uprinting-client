import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'order-confirmation',
  templateUrl: './order-confirmation.component.html'
})
export class OrderConfirmationComponent implements OnInit {

	jobOrder;
	jobOrderItems;

	constructor(
		private orderService: OrderService,
		private ActivatedRoute: ActivatedRoute,
		private router : Router
	) { }


	ngOnInit() {
		let jobOrderId = this.ActivatedRoute.snapshot.params['order_id'];
		this.orderService.getOrder(jobOrderId).subscribe(
			success => {
				
				this.jobOrder = success.joHeader;
				this.jobOrderItems = success.items;
			},
			error => {}
		);
	}

	computeSubtotal() {
		if(this.jobOrderItems)
			return this.jobOrderItems
				.reduce((acc, item) => parseFloat(item.price) + 
									   parseFloat(acc), 0);
	}

	computeGrandTotal() {
		if(this.jobOrderItems)
			return parseFloat(this.computeSubtotal()) + 
				   parseFloat(this.jobOrder.shipping_total);
	}

}
