import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Login } from './login/login';
import { PainelPrincipal } from './componentes/painel-principal/painel-principal';
import { Cadastroproduto } from './componentes/cadastroproduto/cadastroproduto';

export const routes: Routes = [
  { path: 'inicio', component: Inicio },
  { path: 'login', component: Login },
  { path: 'painel-principal', component: PainelPrincipal },
  { path: 'cadastro-produto', component: Cadastroproduto },
  { path: 'editar-produto/:id', component: Cadastroproduto },
  { path: '', redirectTo: 'painel-principal', pathMatch: 'full' }
];