import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckersListComponent } from './components/checkers-list/checkers-list.component';
import { CheckerDetailsComponent } from './components/checker-details/checker-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'checkers', pathMatch: 'full' },
  { path: 'checkers', component: CheckersListComponent },
  { path: 'checkers/:id', component: CheckerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


