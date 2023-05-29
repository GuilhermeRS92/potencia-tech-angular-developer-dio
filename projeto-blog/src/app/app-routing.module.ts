import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FashionComponent } from './pages/fashion/fashion.component';
import { BeAWriterComponent } from './pages/be-a-writer/be-a-writer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'be-a-writer', component: BeAWriterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
