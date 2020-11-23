import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from
'@nguniversal/module-map-ngfactory-loader';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: 'http://localhost:4000/'}
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
