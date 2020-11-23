import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Stock } from '../model/stock';
import { StockService } from './stock.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockLoadResolverService implements Resolve<Stock> {

  constructor(private stockService: StockService) { }
resolve(route: ActivatedRouteSnapshot,
state: RouterStateSnapshot):
Stock | Observable<Stock> | Promise<Stock>
{
const stockCode = route.paramMap.get('code');
return this.stockService.getStock(stockCode);
}
}
