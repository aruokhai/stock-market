import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, SimpleChanges } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

import { TouchSequence } from 'selenium-webdriver';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent{
 
  @Input() public stock: Stock;

  constructor(private stockService: StockService) {}

  onToggleFavorite(event) {
    this.stockService.toggleFavorite(this.stock)
      .subscribe((stock) => this.stock.favorite = !this.stock.favorite);
  }
}
    //