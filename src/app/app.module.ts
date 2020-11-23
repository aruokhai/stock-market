import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockService } from './services/stock.service';
import { MessageService } from './services/message.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthService } from './services/auth.service';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { StockAppInterceptor } from './services/stock-app.interceptor';
import { AppRoutesModule } from './app-routes.module';
import {AuthGuard} from './guards/auth.guard';
import {CreateStockDeactivateGuard} from './guards/create-stock-deactivate.guard'
import {  Inject, PLATFORM_ID, APP_ID } from
'@angular/core';
import { isPlatformBrowser, APP_BASE_HREF } from
'@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,CreateStockComponent, StockListComponent, LoginComponent, RegisterComponent, StockDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'stock-app'}),
    FormsModule,
    HttpClientModule,
    AppRoutesModule,
  ],
  providers: [
    StockService,
    MessageService,
    UserService,
    UserStoreService,
    AuthGuard,
    CreateStockDeactivateGuard,{
      provide: HTTP_INTERCEPTORS,
      useClass: StockAppInterceptor,
      multi: true,
    }, {provide: APP_BASE_HREF, useValue: ''}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
    'in the browser' : 'on the server';
    console.log(`Running ${platform} with
    appId=${appId}`);
    }
 }
