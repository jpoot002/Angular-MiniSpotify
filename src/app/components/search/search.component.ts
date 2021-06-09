import { Component } from '@angular/core';
import { SpotyfyService } from '../../services/spotyfy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  constructor(private spotify:SpotyfyService) { }

  public GetArtistas: any[]=[];
  public GetLoading: boolean;

  public GetBuscador(BuscarArtista:string){
    this.GetLoading= true;
    this.spotify.GetArtista(BuscarArtista)
    .subscribe((Artistas:any) => {
      this.GetArtistas= Artistas;
      this.GetLoading= false;
    }),(errorser)=> {
      console.log(errorser.error.error);
    }
  };

}
