import { ServicosComponent } from './../servicos/servicos.component';
import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  asyncTabs: Observable<ServicosComponent[]>;
  constructor() {

    // this.asyncTabs = new Observable((observer: Observer<ServicosComponent[]>) => {
    //   setTimeout(() => {
    //     observer.next([
    //       {label: 'Serviços', content: 'Sobrancelhas'},
    //       {label: 'Perfil', content: 'Dados da Empresa'},
    //       {label: 'Historico', content: 'Consultas Realizadas'},
    //     ]);
    //   }, 1000);
    // });

  }

  


  
}
