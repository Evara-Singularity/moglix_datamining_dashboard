import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

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
				path: 'about',
				loadChildren: () =>
					import('./about/about.module').then((m) => m.AboutModule)
			},
    ]
    },
];

export const PagesRoutes = RouterModule.forChild(routes);
