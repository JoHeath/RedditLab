import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  {path:"Reddit", component:PostListComponent},
  {path: "", redirectTo: "/Reddit", pathMatch:"full"},
  {path: "**", redirectTo: "/Reddit", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
