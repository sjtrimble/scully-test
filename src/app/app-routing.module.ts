import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./home/home.module";

const routes: Routes = [
  {
    path: "blog",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: 'dev', loadChildren: () => import('./dev/dev.module').then(m => m.DevModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
