import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyfyService } from '../../services/spotyfy.service';
import { Tracks } from '../../interfaces/Tracks';
import { Artistas } from '../../interfaces/Artistas';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  public GetLoading:boolean = false;
  public GetAlertainformacion:string="info";
  public GetArtista: Artistas;
  public GetTracksArtista:Tracks;
  
  constructor(
    private router:ActivatedRoute,
    private spotyfyService:SpotyfyService,
    ) { }



  ngOnInit(): void {
    this.router.params.subscribe(
      params =>{
        this.getArtista(params['id']),
        this.GetTopTracks(params['id'])
      }
    );
  }

  ngOnDestroy(): void {
    localStorage.removeItem("files");
    localStorage.removeItem("Validador");
  }
  
  private getArtista (DatosBusquedaId){
    this.GetLoading= true;
    this.spotyfyService.GetArtistBuscadoId(DatosBusquedaId)
      .subscribe( Artistas => {
        this.GetArtista = Artistas;
        this.GetLoading= false;
    
    })
  }

  private GetTopTracks(DatosBusquedaId){
    this.spotyfyService.GetArtistsTopTracks(DatosBusquedaId)
    .subscribe(tracksArtista =>{
      this.GetTracksArtista=tracksArtista;
      localStorage.setItem("Validador",'true');
      localStorage.removeItem("files");
      localStorage.setItem("files",JSON.stringify(this.GetTracksArtista));
     
    })
  }


}
