import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MainComponent } from './componentes/main/main.component';
import { IntroComponent } from './componentes/intro/intro.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path: 'principal',component: PrincipalComponent},
  {path: 'encabezado',component: EncabezadoComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'intro',component: IntroComponent},
  {path: 'main',component: MainComponent},
  {path: '', redirectTo: 'principal',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
