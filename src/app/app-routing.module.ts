import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IsaiComponent } from './isai/isai.component';
import { PeterComponent } from './peter/peter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'isai', component: IsaiComponent },
  { path: 'peter', component: PeterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
