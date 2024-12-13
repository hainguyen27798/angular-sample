import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'virtual-list',
    loadComponent: () =>
      import('@app/features/virtual-scroll/virtual-scroll.component').then(
        (c) => c.VirtualScrollComponent,
      ),
  },
];
