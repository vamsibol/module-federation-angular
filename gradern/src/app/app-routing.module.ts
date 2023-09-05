import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'fruits',
  //   loadChildren: () => import('fruits/Module').then(m => m.AppleModule)
  // },
  {
    path: 'fruits',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'fruits',
      exposedModule: './Module'
    }).then(m => m.AppleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
