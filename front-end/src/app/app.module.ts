import { AppVersion } from '@ionic-native/app-version/ngx';
import { GlobalService } from './services/global.services';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import {MatInputModule} from '@angular/material/input';
//paginas
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { HistoricoComponent } from './paginas/historico/historico.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { HorariosComponent } from './paginas/horarios/horarios.component';
import { AdminComponent } from './paginas/admin/admin.component';
import  {ConfirmacaoComponent } from './paginas/confirmacao/confirmacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.services';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

// import { MatNativeDateModule } from '@angular/material/core/datetime';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { NavegacaoComponent } from './navegacao/navegacao.component';

@NgModule({
  declarations: [
   AppComponent,
   HomeComponent,
   LoginComponent,
   ServicosComponent,
   HistoricoComponent,
   PerfilComponent,
   HorariosComponent,
   AdminComponent,
   ConfirmacaoComponent,
   NavegacaoComponent
  
  ],
  entryComponents: [],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
    
    
    // MatNativeDateModule,
    // MatDatepickerModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    GlobalService,
    AppVersion,
    MatDatepickerModule,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
