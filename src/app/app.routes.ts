import { Routes } from '@angular/router';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { BaseComponent } from './components/base/base.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { FilhoAComponent } from './components/primeiro/components/filho-a/filho-a.component';
import { FilhoBComponent } from './components/primeiro/components/filho-b/filho-b.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';

// export const routes: Routes = [
//   { path: 'primeiro', component: PrimeiroComponent },
//   { path: 'segundo', component: SegundoComponent },
// ];

// export const routes: Routes = [
//   { path: 'componentes', component: BaseComponent },
//   { path: 'componentes/primeiro', component: PrimeiroComponent },
//   { path: 'componentes/segundo', component: SegundoComponent },
// ];

export const routes: Routes = [
  { path: '', title: 'Inicial', component: InicialComponent },
  {
    path: 'componentes',
    title: 'Componente',
    loadComponent: () =>
      import('./components/base/base.component').then((m) => m.BaseComponent),
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'posts/:userId',
    component: PostsComponent,
  },
  {
    path: 'componentes/primeiro',
    title: 'Primeiro',
    loadComponent: () =>
      import('./components/primeiro/primeiro.component').then(
        (m) => m.PrimeiroComponent
      ),
    children: [
      { path: 'filho-a', title: 'Filho A', component: FilhoAComponent },
      { path: 'filho-b', title: 'Filho B', component: FilhoBComponent },
    ],
  },
  {
    path: 'componentes/segundo',
    title: 'Segundo',
    loadComponent: () =>
      import('./components/segundo/segundo.component').then(
        (m) => m.SegundoComponent
      ),
  },
  { path: '**', component: PaginaNaoEncontradaComponent }, //sempre add no final
];
