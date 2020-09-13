import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { SpotyfyService} from '../../services/spotyfy.service'

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  TracksArtista:any = {};
  Artista:any = {};
  loading: boolean

  constructor(private router:ActivatedRoute,
              private spotyfyService:SpotyfyService) { }


  ngOnInit(): void {
    this.router.params.subscribe(
      params =>{
        this.getArtista(params['id']),
        this.GetTopTracks(params['id'])
      }
    );
  }

  getArtista (DatosBusquedaId){
    this.loading= true;
    this.spotyfyService.GetArtistBuscadoId(DatosBusquedaId)
      .subscribe( artista => {
        this.Artista = artista;
        this.loading= false;
    })
  }

  GetTopTracks(DatosBusquedaId){
    this.spotyfyService.GetArtistsTopTracks(DatosBusquedaId)
        .subscribe(tracksArtista =>{
          this.TracksArtista=tracksArtista;
        })
  }


}
