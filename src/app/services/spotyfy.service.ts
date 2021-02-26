import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotyfyService {

  constructor(private http: HttpClient) {

  }

  GetNewget(query:string){
    const url ='https://api.spotify.com/v1/'+query;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAUuIfFavqHEbVUAyeCDLpXQTPrio8RRLMRxDS6Xvw8PwkD2tVgxFMvBtXItDuAl-JGm_WrmdaWDi_v_Kw'
    });

    return this.http.get(url,{headers})
  }

  GetNeWreleases(){
    return this.GetNewget('browse/new-releases?limit=50')
      .pipe( map(NeWreleases=>NeWreleases['albums'].items));
  }

  GetArtista(Buscardor:string){
    return this.GetNewget('search?q='+Buscardor+'&type=artist&limit=50')
    .pipe( map(NeWreleases=>NeWreleases['artists'].items));
  }

  GetArtistBuscadoId(BuscardorID:string){
    return this.GetNewget('artists/'+BuscardorID);
  }

  GetArtistsTopTracks(BuscardorIdTopTracks:string){
    return this.GetNewget('artists/'+BuscardorIdTopTracks+'/top-tracks?country=ES')
    .pipe( map(ArtistsTopTracks=>ArtistsTopTracks['tracks']));
  }

}
