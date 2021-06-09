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
  private timeLeft: number = 58;
  private interval;
  constructor(
    private http: HttpClient,) {
  }

  GetNewget(query:string):Observable<any>{
    const url ='https://api.spotify.com/v1/'+query;
    const headers = new HttpHeaders({
      'Authorization':'Bearer '+this.ApiKey.access_token
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

  SetTtoken(){
    this.ApiKey= JSON.parse(localStorage.getItem("result"));
    this.startTimer();
  }

  RemoveToken(){
    localStorage.removeItem("result");
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.GetToken();
        this.SetTtoken();
        this.timeLeft = 58;
      }
    },1000)

  }

 

}
