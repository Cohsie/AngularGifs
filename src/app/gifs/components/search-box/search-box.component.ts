import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtInputEtiqueta')
  public inputEtiqueta!: ElementRef<HTMLInputElement>;


  buscaEtiqueta() {
    const nuevaEtiqueta = this.inputEtiqueta.nativeElement.value;
    console.log({nuevaEtiqueta});
  }

}
