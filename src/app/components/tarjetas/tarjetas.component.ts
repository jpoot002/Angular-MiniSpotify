import { Component, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent   {

  @Input()  Newreleases:any[] = [];

  constructor( private router:Router) { }


  public GetBuscador(DatosBusqueda:any){
    let artistaId;

    if (DatosBusqueda.type === 'artist') {
      artistaId = DatosBusqueda.id;
    } else {
      artistaId = DatosBusqueda.artists[0].id;
    }
    this.router.navigate(['artist',artistaId]);
  }

}






