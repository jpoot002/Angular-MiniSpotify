import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() Newreleases:any[] = [];

  constructor( private router:Router) { }

  ngOnInit(): void { }

  Busqueda(DatosBusqueda:any){
    let artistaId;

    if (DatosBusqueda.type === 'artist') {
      artistaId = DatosBusqueda.id;
    } else {
      artistaId = DatosBusqueda.artists[0].id;
    }
    this.router.navigate(['artist',artistaId]);
  }

}
