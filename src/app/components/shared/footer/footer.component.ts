import { Component, HostListener, ElementRef} from '@angular/core';
import { Observable} from 'rxjs'
import {PlayList} from '../../../interfaces/PlayList';
import { ActivatedRoute } from '@angular/router';
import { SpotyfyService} from '../../../services/spotyfy.service';
import { ID } from '../../../interfaces/Tracks';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})

export class FooterComponent{

  constructor(
    private router:ActivatedRoute,
    private spotyfyService:SpotyfyService,) { }

  private targetid: string;
  public  PlayList: Array<PlayList> = [];
  public  CurrentTime:number = 0;
  public  Duration:number = 0;
  public  album:string = "cancion";
  public  PlayPause:number = -1
  public  iconvolume:number = 1
  private ValidadorJson:boolean = false;
  private audioObj = new Audio();
  private Numero:number = -1;

  private AudioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];

  @HostListener('document:click',['$event']) clickout(event) 
  { 
    this.targetid= event.target.id;
    if (this.targetid == "RepArtista") {
      console.log(this.targetid);
      this.playartista();
    }
  }

  public ClickPlay(Num,url){
    this.Numero=Num;
    this.OpenFile(url);
  };

  public playartista(){
    this.SetPlatList();
     if (this.ValidadorJson) {
      console.log(this.PlayList[0].preview_url);
       this.OpenFile(this.PlayList[0].preview_url);
       this.Numero = 0;
       this.PlayPause = 1;
       this.album =this.PlayList[0].album ; 
       this.removeDatos();
     }

  }
  public PlayStop(){  
     if(this.PlayPause < 0){
      this.audioObj.play();
      this.PlayPause = 1;
    }
    else{
       this.audioObj.pause();
      this.PlayPause = -1;
    }
  }

  public Stop(){
    this.audioObj.pause();
    this.audioObj.currentTime=0;
  }


  public Next(){
    if (this.Numero == 0 || this.Numero > 0) {
      if (this.Numero < (this.PlayList.length-1)) {
        this.Numero++
        this.OpenFile(this.PlayList[this.Numero].preview_url);
        this.album = this.PlayList[this.Numero].album;
      }
    }
  }

  public Pre(){
    if (this.Numero ! = 0 ) {
        this.Numero--
        this.OpenFile(this.PlayList[this.Numero].preview_url);
        this.album = this.PlayList[this.Numero].album;
    }
  }

  public SetVolumen(event){
    this.audioObj.volume  = event.target.value;
    this.iconvolume = event.target.value;
  }

  //para la vara de audio
  public SetSeekTo(event) {
    this.audioObj.currentTime = event.target.value;
  }

  public ConvesionTime(segundos){
    var ms = segundos,
    min = Math.floor((ms/1000/60) << 0),
    sec = Math.floor((ms/1000) % 60);
    return (min + ':' + sec);
  }

  private StreamObservable(url) {
    return new Observable(observer => {
      this.audioObj.src=url;
      this.audioObj.load();
      this.audioObj.play();
      
      const handler = (event: Event) => {
        this.Duration = 0 ;
        this.CurrentTime = this.audioObj.currentTime;
        this.Duration =  this.audioObj.duration;
       
        if (this.CurrentTime == this.Duration ) {
          this.Next();
        }
        
      };

      this.AddEvents(this.audioObj, this.AudioEvents, handler);
      return () => {

      this.audioObj.pause();
      this.audioObj.currentTime = 0;
      this.RemoveEvents(this.audioObj, this.AudioEvents, handler);
       
      };
    });
    
  }

  private AddEvents(obj, events, handler) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  private RemoveEvents(obj, events, handler) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }


  private OpenFile(url){
    this.StreamObservable(url).subscribe(event=>{});
  }

  private SetPlatList(){
    this.ValidadorJson= false;
    let filesJson= JSON.parse(localStorage.getItem("files"));
    this.ValidadorJson= JSON.parse(localStorage.getItem("Validador"));

    if (this.ValidadorJson) {
      this.PlayList.splice(0, this.PlayList.length);

      console.log(filesJson);
      for (let i = 0; i < filesJson.length; i++) {
       if (filesJson[i].preview_url != null) {
        this.PlayList.push({
          num:i,
          preview_url:filesJson[i].preview_url,
          album:filesJson[i].name
        });
       }
      }
    }
  }

  private removeDatos(){

    localStorage.removeItem("files");
    localStorage.removeItem("Validador");
  }
}
