import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historialEtiquetas: string[] = ["Viene de base, quitar al entregar"];

  get historialEtiquetas(){
    return[...this._historialEtiquetas]
  }

  buscarEtiqueta(etiqueta: string): void {
    this._historialEtiquetas.unshift(etiqueta.toLowerCase().trim());//Aquí hago la parte de que ignore la distinción entre mayúsculas y minúsculas
    console.log(this.historialEtiquetas)
  }

  constructor() { }
}


/*.filter((_historialEtiquetas) => _historialEtiquetas)*/
