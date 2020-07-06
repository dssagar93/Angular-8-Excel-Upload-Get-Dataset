import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueryBuilderComponent } from './query-builder/query-builder.component';
import { RouterModule } from '@angular/router';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from 'angular-datatables';
import { DatatableGridComponent } from './datatable-grid/datatable-grid.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryBuilderComponent,
    UploadExcelComponent,
    HomeComponent,
    DatatableGridComponent,
    MenuComponent
  ],
  imports: [
    DataTablesModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'Query-Fetch', component:QueryBuilderComponent},
      { path: 'Upload-Excel', component:UploadExcelComponent},
      { path: '', redirectTo:'Upload-Excel',pathMatch:'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
