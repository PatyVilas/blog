import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '@modules/about-us/page/about-us.component';
import { EntryDetailComponent } from '@modules/entry-detail/page/entry-detail.component';
import { HomePageComponent } from '@modules/home/page/home-page.component';
import { LoginComponent } from '@modules/login/page/login.component';
import { NotFoundComponent } from '@modules/not-found/page/not-found.component';



const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import(`../app/modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'entry-detail/:id',
    component: EntryDetailComponent,
    loadChildren: () => import(`../app/modules/entry-detail/entry-detail.module`).then(m => m.EntryDetailModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import(`../app/modules/login/login.module`).then(m => m.LoginModule)
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
