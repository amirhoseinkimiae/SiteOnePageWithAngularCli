import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/about.component';
import { ContactComponent } from 'src/contact/contact.component';
import { HomeComponent } from 'src/home/home.component';
import { LearnComponent } from 'src/learn/learn.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"learn",component:LearnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
