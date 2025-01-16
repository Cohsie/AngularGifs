import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private GifsService: GifsService){}

  get listaEtiquetas(){
    const listaFiltro = this.GifsService.historialEtiquetas.slice(0,10);
    return listaFiltro;
  }
}
