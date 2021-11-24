import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '@modules/about-us/page/about-us.component';
import { HomePageComponent } from '@modules/home/page/home-page.component';
import { NotFoundComponent } from '@modules/not-found/page/not-found.component';



const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import(`../app/modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
    loadChildren: () => import(`../app/modules/about-us/about-us.module`).then(m => m.AboutUsModule)
  },
  {
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
