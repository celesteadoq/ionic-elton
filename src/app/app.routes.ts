import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage),
  },

  {
    path: 'noticias',
    loadComponent: () =>
      import('./pages/noticias/noticias.page').then(m => m.NoticiasPage),
  },
  {
    path: 'noticia-detalhe',
    loadComponent: () =>
      import('./pages/noticia-detalhe/noticia-detalhe.page').then(m => m.NoticiaDetalhePage),
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./pages/perfil/perfil.page').then(m => m.PerfilPage),
  },
  {
    path: 'financeiro',
    loadComponent: () =>
      import('./pages/financeiro/financeiro.page').then(m => m.FinanceiroPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];