import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'mfe-1',
    loadChildren: () => import('mfe-1/Module').then((m) => m.RemoteEntryModule),
  },
];
