import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  paths:{path:string, nome:string, durata:number}[] = [
    {path:"../../../assets/hey.mp3", nome:"", durata:0},
    {path:"../../../assets/summer.mp3", nome:"", durata:0},
    {path:"../../../assets/ukulele.mp3", nome:"", durata:0}
  ];
  audio:HTMLAudioElement;

  constructor() { }

  ngOnInit(): void {
    this.paths.forEach(x => {
      this.audio = new Audio();
      this.audio.src = x.path;
      x.durata = this.audio.duration;
    });
  }
}