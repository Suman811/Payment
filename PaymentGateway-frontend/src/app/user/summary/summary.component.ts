import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  selectedMethod: string = '';
  paymentOptionsVisible: boolean = false; // Add this property to manage visibility
  plan = {
    name: '',
    price: '',
    users: '',
    storage: '',
    support: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the query parameters
    this.route.queryParams.subscribe(params => {
      const selectedPlan = params['plan'];
      this.setPlanDetails(selectedPlan);
    });
  }

  showPaymentOptions(): void {
    this.paymentOptionsVisible = true; // Show payment options
  }

  goBack(): void {
    this.paymentOptionsVisible = false; // Hide payment options
  }

  confirmSubscription(): void {
    this.showPaymentOptions(); // Call to show payment options
    console.log('Subscription confirmed for:', this.plan);
    // Handle subscription confirmation here
    // You might want to navigate to another route or show a confirmation message
  }

  setPlanDetails(planType: string): void {
    // Example plan details; adjust based on actual data
    switch (planType) {
      case 'basic':
        this.plan = {
          name: 'Basic Plan',
          price: '$10/month',
          users: '1 User',
          storage: '10 GB Storage',
          support: 'Basic Support'
        };
        break;
      case 'standard':
        this.plan = {
          name: 'Standard Plan',
          price: '$30/month',
          users: '5 Users',
          storage: '50 GB Storage',
          support: 'Priority Support'
        };
        break;
      case 'premium':
        this.plan = {
          name: 'Premium Plan',
          price: '$60/month',
          users: 'Unlimited Users',
          storage: '200 GB Storage',
          support: '24/7 Support'
        };
        break;
      default:
        this.plan = {
          name: 'Unknown Plan',
          price: 'N/A',
          users: 'N/A',
          storage: 'N/A',
          support: 'N/A'
        };
        break;
    }
  }
}
