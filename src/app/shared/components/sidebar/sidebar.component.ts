import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',//Esto ha sido cambiado
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private GifsService: GifsService){}

  get listaEtiquetas(){
    return this.GifsService.historialEtiquetas;
  }
}
