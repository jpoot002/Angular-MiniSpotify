import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';
import {ApiKey} from '../interfaces/ApiKey';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SpotyfyService {
  private ApiKey:ApiKey;
  private timeLeft: number = 3598;
  private interval;
  constructor(
    private http: HttpClient,) {}

  // Para el token
  GetToken(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "__Host-device_id=AQDOMPchdECke0M5mUCSBW4VTpXLQNCQeQYf8MhiYnlgXUJPa-y5Ts5uoCKeqvmbfITWjx0xgqSU5If_r0AQqrrx9xcHr8D4USY");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", "5504b47b73a74d6ab00f5e82c50f4c9b");
    urlencoded.append("client_secret", "9712f2c9cbb249488af66abaca53aa54");

    fetch("https://accounts.spotify.com/api/token", {
      method: 'POST',
      body: urlencoded,
      headers: myHeaders,
      redirect: 'follow'
    })
    .then(response => response.text())
    .then(result => localStorage.setItem("result",result))
    .catch(error => console.log('error', error));
    this.ApiKey= JSON.parse(localStorage.getItem("result"));
  }

  startTimer() {
    this.interval = setInterval(() => {
        this.GetToken();
        this.SetTtoken();
    },3000*1000)//para segundos
  }

  SetTtoken(){
    this.ApiKey= JSON.parse(localStorage.getItem("result"));
    this.startTimer();
  }

  RemoveToken(){
    localStorage.removeItem("result");
  }
  
  GetNewget(query:string):Observable<any>{
    const url ='https://api.spotify.com/v1/'+query;
    const headers = new HttpHeaders({
      'Authorization':'Bearer '+this.ApiKey.access_token
    });
    return this.http.get(url,{headers})
  }

  // Artista
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

  // Albums
  GetNeWreleases(){
    return this.GetNewget('browse/new-releases?country=SE&limit=50&offset=10')
      .pipe( map(NeWreleases=>NeWreleases['albums'].items) );
  }

  GetAlbums(BuscardorID){
    return this.GetNewget('albums/'+BuscardorID);
  }

  GetAlbumsTras(BuscardorID){
    return this.GetNewget('albums/'+BuscardorID+'/tracks')
    .pipe( map(ItemsAlbumsTras=>ItemsAlbumsTras['items']));
  }

  // Categoria
  GetCategories(){
    return this.GetNewget('browse/categories?country=SE&locale=sv_SE&limit=30&offset=5')
    .pipe( map(ItemsCategories=>ItemsCategories['categories']));
  }

  // Funciones Generales
  GetTrackId(tracksId){
    return this.GetNewget('tracks/'+tracksId+'?market=ES')
    .pipe( map(ItemstracksId=>ItemstracksId));
  }

  GetCategoriesplaylists(paramsrouter){
    return this.GetNewget('browse/categories/'+paramsrouter+'/playlists?country=SE&limit=20&offset=10')
    .pipe( map(ItemsCategoriesplay=>ItemsCategoriesplay['playlists']));
  }

  GetCategoriesplayliststracks(paramsrouter){
    return this.GetNewget('playlists/'+paramsrouter+'/tracks')
    .pipe( map( ItemsCategoriesplay=>ItemsCategoriesplay.items) )
  }
  


  // Para consultas por url
  GetNewgeturl(query:string):Observable<any>{
    const url =query;
    const headers = new HttpHeaders({
      'Authorization':'Bearer '+this.ApiKey.access_token
    });
    return this.http.get(url,{headers})
  }
}
