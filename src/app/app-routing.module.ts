import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog' },
  { path: 'blog', component: ListaPostsComponent },
  { path: 'nuevo', component: FormularioComponent },
  { path: '**', redirectTo: '//blog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
