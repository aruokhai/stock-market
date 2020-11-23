import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormControl , FormGroup, Validators , FormBuilder, FormArray} from '@angular/forms';
import { StockService } from 'src/app/services/stock.service';
import { MessageService } from '../../services/message.service';
let counter = 1;
@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
  providers: [MessageService]
})


export class CreateStockComponent {
  public stock: Stock;
  public confirmed = false;
  public message = null;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private stockService: StockService) {
    this.initializeStock();
  }

  initializeStock() {
    this.stock =  {
      name: '',
      code: '',
      price: 0,
      previousPrice: 0,
      exchange: 'NASDAQ',
      favorite: false
    };
  }

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm) {
    if (stockForm.valid) {
      this.stockService.createStock(this.stock)
          .subscribe((result: any) => {
            this.message = result.msg;
            this.initializeStock();
          }, (err) => {
            this.message = err.error.msg;
          });
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}