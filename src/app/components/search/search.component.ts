import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from '../../services/spotyfy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private spotify:SpotyfyService) { }

  Artistas: any[]=[];
  loading: boolean;

  Buscador(BuscarArtista:string){
    this.loading= true;
    this.spotify.GetArtista(BuscarArtista)
    .subscribe((Artistas:any) => {
      this.Artistas= Artistas;
      this.loading= false;
    }),(errorser)=> {
      console.log(errorser.error.error);
    }
  };

  ngOnInit(): void {
  }

}
