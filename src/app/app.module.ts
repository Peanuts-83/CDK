import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { CdkTableModule } from '@angular/cdk/table'
import { ScrollingModule } from '@angular/cdk/scrolling'

import { AppComponent } from './app.component'
import { NavComponent } from './nav/nav.component'

import { DragComponent } from './components/drag/drag.component'
import { AppRoutingModule } from './app-routing.module'
import { SortComponent } from './components/sort/sort.component'
import { TransfertComponent } from './components/transfert/transfert.component'
import { TableComponent } from './components/table/table.component';
import { ScrollComponent } from './components/scroll/scroll.component'

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    NavComponent,
    SortComponent,
    TransfertComponent,
    TableComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    CdkTableModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
