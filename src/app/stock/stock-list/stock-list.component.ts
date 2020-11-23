import { Component, OnInit, OnChanges } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';
import {Observable, Subject} from 'rxjs';
import { debounceTime, switchMap,
  distinctUntilChanged, startWith,
  share } from 'rxjs/operators';
import { UserStoreService } from 'src/app/services/user-store.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  
  public stocks$: Observable<Stock[]>;
  private page = 1;
  constructor(private stockService: StockService,
    private userStore: UserStoreService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Page No. :',     this.route.snapshot.queryParamMap.get('page'));
    this.route.queryParams.subscribe((params) => {
      console.log('Page: ',params.page);
      this.stocks$ = this.stockService.getStocks();

    });
  }
  nextPage(){
    this.router.navigate([], {
      queryParams: {
        page: ++this.page
      }
    })
  }
}
