import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PortalNameGuard } from '../utils/guard/portal-name-guard.guard';


const routes: Routes = [
  { 
    path: '',
		component: PagesComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('./home/home.module').then((m) => m.HomeModule)
			},
			{
				path: ':portalName',
				loadChildren: () =>
					import('./portalView-type1/portalView-type1.module').then((m) => m.PortalViewType1Module),
					canActivate: [PortalNameGuard]	
			},
      		{
				path: 'about',
				loadChildren: () =>
					import('./about/about.module').then((m) => m.AboutModule)
			},
    ]
    },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }

