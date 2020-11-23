import { Injectable, Inject, Optional } from '@angular/core';
import { Stock } from '../model/stock';
import { BrowserStack } from 'protractor/built/driverProviders';
import { Observable , of as ObservableOf, throwError as ObservableThrow} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { query } from '@angular/core/src/render3';
import { UserStoreService } from './user-store.service';
import { APP_BASE_HREF } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseUrl: string;
  constructor(private http: HttpClient, private userStore: UserStoreService ,@Optional() @Inject(APP_BASE_HREF)
  origin: string) { this.baseUrl = `${origin}/api/stock`;}

  getStocks() : Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseUrl);
  }

  getStock(code: string): Observable<Stock> {
    return this.http.get<Stock>('/api/stock/' + code);
  }

  createStock(stock: Stock): Observable<any> {
    return this.http.post('/api/stock', stock);
  }

  toggleFavorite(stock: Stock): Observable<Stock> {
    return this.http.patch<Stock>('/api/stock/' + stock.code,
      {
        favorite: !stock.favorite
      });
}}