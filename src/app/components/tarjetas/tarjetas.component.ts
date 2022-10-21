import { Component, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent   {

  @Input()  Newreleases:any[] = [];
  @Input()  Numero:number;

  constructor( private router:Router) { }


  public GetBuscadorAlbun(DatosBusqueda:any){
    this.router.navigate(['Spotify','albun',DatosBusqueda]);
  }

  public GetBuscadorArtista(DatosBusqueda:any){
    this.router.navigate(['Spotify','artista',DatosBusqueda]);
  }

  public GetBuscadorCategoria(DatosBusqueda:any){
    this.router.navigate(['Spotify/categories/categoria',DatosBusqueda]);
  }


}






