import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  public stock: Stock;
  constructor(private route: ActivatedRoute) { 
              }

  ngOnInit() {
    this.route.data.subscribe((data: {stock: Stock}) => {
      this.stock = data.stock;
    })
  }
}
