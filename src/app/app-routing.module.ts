import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragComponent } from './components/drag/drag.component'
import { ScrollComponent } from './components/scroll/scroll.component'
import { SortComponent } from './components/sort/sort.component'
import { TableComponent } from './components/table/table.component'
import { TransfertComponent } from './components/transfert/transfert.component'

const routes: Routes = [
  {path: 'drag', component: DragComponent},
  {path: 'sort', component: SortComponent},
  {path: 'transfert', component: TransfertComponent},
  {path: 'table', component: TableComponent},
  {path: 'scroll', component: ScrollComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
