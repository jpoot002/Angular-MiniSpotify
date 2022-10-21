import { Component, OnInit,HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyfyService } from '../../services/spotyfy.service';
import { Tracks, ID } from '../../interfaces/Tracks';
import { Artistas } from '../../interfaces/Artistas';
import { AlbumsId,AlbumsIdTracks } from '../../interfaces/Albums';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  public GetLoading:boolean = false;
  public GetArtista: Artistas;
  public GetAlbumsID:AlbumsId;
  public GetAlbumsIdTras:AlbumsIdTracks;
  
  constructor(
    private router:ActivatedRoute,
    private spotyfyService:SpotyfyService,
    ) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      params =>{
        if (params['tipo'] == "albun") {
          this.GetAlbums(params['id'])
          this.GetAlbumsTras(params['id'])
        } else {
          this.getArtista(params['id']),
          this.GetTopTracks(params['id'])
        }
      }
    );
  }

  ngOnDestroy(): void {
    localStorage.removeItem("files");
    localStorage.removeItem("Validador");
  }
  
  //Traer el albun del artistas
  private getArtista (DatosBusquedaId){
    this.GetLoading= true;
    this.spotyfyService.GetArtistBuscadoId(DatosBusquedaId)
      .subscribe( Artistas => {
        this.GetAlbumsID = Artistas;
        this.GetLoading= false;
    
    })
  }

  private GetTopTracks(DatosBusquedaId){
    this.spotyfyService.GetArtistsTopTracks(DatosBusquedaId)
    .subscribe(tracksArtista =>{
      this.GetAlbumsIdTras=tracksArtista;
      localStorage.setItem("Validador",'true');
      localStorage.removeItem("files");
      localStorage.setItem("files",JSON.stringify(this.GetAlbumsIdTras));
    })
  }

  private GetAlbums(DatosBusquedaId){
  this.spotyfyService.GetAlbums(DatosBusquedaId)
    .subscribe((GetAlbumsId:any) => {
      this.GetAlbumsID = GetAlbumsId
    }),(errorser)=> {
      console.log(errorser.error.error);
    }
  }

  private GetAlbumsTras(DatosBusquedaId){
    this.spotyfyService.GetAlbumsTras(DatosBusquedaId)
    .subscribe((GetAlbumsTras:any) => {
      this.GetAlbumsIdTras = GetAlbumsTras
      localStorage.setItem("Validador",'true');
      localStorage.removeItem("files");
      localStorage.setItem("files",JSON.stringify(this.GetAlbumsIdTras));
    }),(errorser)=> {
      console.log(errorser.error.error);
    }
  }

}
