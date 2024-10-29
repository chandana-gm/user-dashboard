import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   data = [
    {
      name: "Monica Geller",
      id: "123456789",
      phone: "+91 9876543210",
      transactionType: "Income",
      transactionDetail: "Salary",
      amount: "$200",
      category: "Savings",
      balance: "$6000"
    },
    {
      name: "Rachel Green",
      id: "987654321",
      phone: "+91 8765432109",
      transactionType: "Income",
      transactionDetail: "Salary",
      amount: "$150",
      category: "Investments",
      balance: "$5000"
    },
    {
      name: "Ross Geller",
      id: "112233445",
      phone: "+91 9123456789",
      transactionType: "Income",
      transactionDetail: "Salary",
      amount: "$300",
      category: "Personal",
      balance: "$4500"
    },
    {
      name: "Chandler Bing",
      id: "556677889",
      phone: "+91 9988776655",
      transactionType: "Income",
      transactionDetail: "Salary",
      amount: "$500",
      category: "Savings",
      balance: "$8000"
    },
    {
      name: "Phoebe Buffay",
      id: "334455667",
      phone: "+91 9123451234",
      transactionType: "Income",
      transactionDetail: "Salary",
      amount: "$100",
      category: "Savings",
      balance: "$3900"
    },
    
  ];
  
}
