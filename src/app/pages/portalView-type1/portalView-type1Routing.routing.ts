import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalViewType1Component } from './portalView-type1.component';

const routes: Routes = [
  {  
    path: '',
    component: PortalViewType1Component,
  }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PortalViewType1RoutingModule { }