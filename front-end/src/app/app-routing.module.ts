import { NavegacaoComponent } from './navegacao/navegacao.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//paginas
import { HomeComponent } from './paginas/home/home.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { LoginComponent } from './paginas/login/login.component';
import { HistoricoComponent } from './paginas/historico/historico.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { HorariosComponent } from './paginas/horarios/horarios.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { ConfirmacaoComponent } from './paginas/confirmacao/confirmacao.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'historico', component: HistoricoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'horarios', component: HorariosComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'confirmacao', component: ConfirmacaoComponent},
  {path: 'navegacao', component: NavegacaoComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
